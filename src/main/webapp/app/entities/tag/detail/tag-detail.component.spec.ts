import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness, RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { TagDetailComponent } from './tag-detail.component';

describe('Tag Management Detail Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagDetailComponent, RouterTestingModule.withRoutes([], { bindToComponentInputs: true })],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: TagDetailComponent,
              resolve: { tag: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(TagDetailComponent, '')
      .compileComponents();
  });

  describe('OnInit', () => {
    it('Should load tag on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', TagDetailComponent);

      // THEN
      expect(instance.tag).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});
