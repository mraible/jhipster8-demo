import {
  entityTableSelector,
  entityDetailsButtonSelector,
  entityDetailsBackButtonSelector,
  entityCreateButtonSelector,
  entityCreateSaveButtonSelector,
  entityCreateCancelButtonSelector,
  entityEditButtonSelector,
  entityDeleteButtonSelector,
  entityConfirmDeleteButtonSelector,
} from '../../support/entity';

describe('Post e2e test', () => {
  const postPageUrl = '/post';
  const postPageUrlPattern = new RegExp('/post(\\?.*)?$');
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const postSample = { title: 'conscious', content: 'Li4vZmFrZS1kYXRhL2Jsb2IvaGlwc3Rlci50eHQ=', date: '2023-12-13T17:21:13.819Z' };

  let post;

  beforeEach(() => {
    cy.login(username, password);
  });

  beforeEach(() => {
    cy.intercept('GET', '/api/posts+(?*|)').as('entitiesRequest');
    cy.intercept('POST', '/api/posts').as('postEntityRequest');
    cy.intercept('DELETE', '/api/posts/*').as('deleteEntityRequest');
  });

  afterEach(() => {
    if (post) {
      cy.authenticatedRequest({
        method: 'DELETE',
        url: `/api/posts/${post.id}`,
      }).then(() => {
        if (post.blog.id) {
          cy.authenticatedRequest({
            method: 'DELETE',
            url: `/api/blogs/${post.blog.id}`,
          }).then(() => {
            post = undefined;
          });
        } else {
          post = undefined;
        }
      });
    }
  });

  it('Posts menu should load Posts page', () => {
    cy.visit('/');
    cy.clickOnEntityMenuItem('post');
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response?.body.length === 0) {
        cy.get(entityTableSelector).should('not.exist');
      } else {
        cy.get(entityTableSelector).should('exist');
      }
    });
    cy.getEntityHeading('Post').should('exist');
    cy.url().should('match', postPageUrlPattern);
  });

  describe('Post page', () => {
    describe('create button click', () => {
      beforeEach(() => {
        cy.visit(postPageUrl);
        cy.wait('@entitiesRequest');
      });

      it('should load create Post page', () => {
        cy.get(entityCreateButtonSelector).click();
        cy.url().should('match', new RegExp('/post/new$'));
        cy.getEntityCreateUpdateHeading('Post');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response?.statusCode).to.equal(200);
        });
        cy.url().should('match', postPageUrlPattern);
      });
    });

    describe('with existing value', () => {
      beforeEach(() => {
        cy.visit('blog');
        cy.get(entityCreateButtonSelector).click();
        cy.get('[data-cy="name"]').type('User blog');
        cy.get('[data-cy="handle"]').type(username);
        cy.get('[data-cy="user"]').select(username);
        cy.get(entityCreateSaveButtonSelector).click();
        cy.get('.alert-success > pre').then($value => {
          const blogId = /\b(\w+)$/.exec($value.text())[1];
          postSample.blog = { id: blogId, user: { id: 2, login: username } };
        });

        cy.authenticatedRequest({
          method: 'POST',
          url: '/api/posts',
          body: postSample,
        }).then(({ body }) => {
          post = body;

          cy.intercept(
            {
              method: 'GET',
              url: '/api/posts+(?*|)',
              times: 1,
            },
            {
              statusCode: 200,
              headers: {
                link: '<http://localhost/api/posts?page=0&size=20>; rel="last",<http://localhost/api/posts?page=0&size=20>; rel="first"',
              },
              body: [post],
            },
          ).as('entitiesRequestInternal');
        });

        cy.visit(postPageUrl);

        cy.wait('@entitiesRequestInternal');
      });

      it('detail button click should load details Post page', () => {
        cy.get(entityDetailsButtonSelector).first().click();
        cy.getEntityDetailsHeading('post');
        cy.get(entityDetailsBackButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response?.statusCode).to.equal(200);
        });
        cy.url().should('match', postPageUrlPattern);
      });

      it('edit button click should load edit Post page and go back', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Post');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response?.statusCode).to.equal(200);
        });
        cy.url().should('match', postPageUrlPattern);
      });

      it('edit button click should load edit Post page and save', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Post');
        cy.get(entityCreateSaveButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response?.statusCode).to.equal(200);
        });
        cy.url().should('match', postPageUrlPattern);
      });

      it('last delete button click should delete instance of Post', () => {
        cy.get(entityDeleteButtonSelector).last().click();
        cy.getEntityDeleteDialogHeading('post').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click();
        cy.wait('@deleteEntityRequest').then(({ response }) => {
          expect(response?.statusCode).to.equal(204);
        });
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response?.statusCode).to.equal(200);
        });
        cy.url().should('match', postPageUrlPattern);

        post = undefined;
      });
    });
  });

  describe('new Post page', () => {
    beforeEach(() => {
      cy.visit(`${postPageUrl}`);
      cy.get(entityCreateButtonSelector).click();
      cy.getEntityCreateUpdateHeading('Post');
    });

    it('should create an instance of Post', () => {
      cy.get(`[data-cy="title"]`).type('signify');
      cy.get(`[data-cy="title"]`).should('have.value', 'signify');

      cy.get(`[data-cy="content"]`).type('../fake-data/blob/hipster.txt');
      cy.get(`[data-cy="content"]`).invoke('val').should('match', new RegExp('../fake-data/blob/hipster.txt'));

      cy.get(`[data-cy="date"]`).type('2023-12-13T09:56');
      cy.get(`[data-cy="date"]`).blur();
      cy.get(`[data-cy="date"]`).should('have.value', '2023-12-13T09:56');
      cy.get('[data-cy="blog"]').select(1);

      cy.get(entityCreateSaveButtonSelector).click();

      cy.wait('@postEntityRequest').then(({ response }) => {
        expect(response?.statusCode).to.equal(201);
        post = response.body;
      });
      cy.wait('@entitiesRequest').then(({ response }) => {
        expect(response?.statusCode).to.equal(200);
      });
      cy.url().should('match', postPageUrlPattern);
    });
  });
});
