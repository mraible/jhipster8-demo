import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness, RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { BlogDetailComponent } from './blog-detail.component';

describe('Blog Management Detail Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailComponent, RouterTestingModule.withRoutes([], { bindToComponentInputs: true })],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: BlogDetailComponent,
              resolve: { blog: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(BlogDetailComponent, '')
      .compileComponents();
  });

  describe('OnInit', () => {
    it('Should load blog on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', BlogDetailComponent);

      // THEN
      expect(instance.blog).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});
