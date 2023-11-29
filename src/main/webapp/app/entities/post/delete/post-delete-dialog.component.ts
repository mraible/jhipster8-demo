import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { IPost } from '../post.model';
import { PostService } from '../service/post.service';

@Component({
  standalone: true,
  templateUrl: './post-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class PostDeleteDialogComponent {
  post?: IPost;

  constructor(
    protected postService: PostService,
    protected activeModal: NgbActiveModal,
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.postService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
