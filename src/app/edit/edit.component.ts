import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';

import { BookmarkService } from '@app/shared/services/bookmark/bookmark.service';
import { ErrorDialogComponent } from '@app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnDestroy {
  bookmarkForm: FormGroup;
  bookmarkUpdate$: Subscription;

  constructor(
    private fb: FormBuilder,
    private bookmarkService: BookmarkService,
    private router: Router,
    private readonly dialog: MatDialog
  ) {
    this.bookmarkForm = this.fb.group({
      name: [this.bookmarkService.editBookmark.name, Validators.required],
      url: [this.bookmarkService.editBookmark.url, Validators.required]
    });
  }

  onSubmit() {
    this.bookmarkUpdate$ = this.bookmarkService.update({
      id: this.bookmarkService.editBookmark.id,
      ...this.bookmarkForm.value,
      created: moment().toDate()
    }).subscribe(
      () => { this.router.navigate(['/list']); },
      () => this.dialog.open(ErrorDialogComponent, {
        width: '400px',
        data: { errorMessage: 'Sorry, unable to update bookmark.' }
      })
    );
  }

  ngOnDestroy() {
    if (this.bookmarkUpdate$) {
      this.bookmarkUpdate$.unsubscribe();
    }
  }
}
