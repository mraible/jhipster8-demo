import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { ITag } from '../tag.model';

@Component({
  standalone: true,
  selector: 'jhi-tag-detail',
  templateUrl: './tag-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class TagDetailComponent {
  tag = input<ITag | null>(null);

  previousState(): void {
    window.history.back();
  }
}
