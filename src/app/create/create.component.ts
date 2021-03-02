import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';

import { BookmarkService } from '@app/shared/services/bookmark/bookmark.service';
import { ErrorDialogComponent } from '@app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnDestroy {
  bookmarkForm: FormGroup;
  bookmarkCreate$: Subscription;

  constructor(
    private fb: FormBuilder, private bookmarkService: BookmarkService,
    private router: Router,
    private readonly dialog: MatDialog
  ) {
    this.bookmarkForm = this.fb.group({
      name: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

  onSubmit() {
    this.bookmarkCreate$ = this.bookmarkService.save({...this.bookmarkForm.value, created: moment().toDate()}).subscribe(
      () => { this.router.navigate(['/list']); },
      () => this.dialog.open(ErrorDialogComponent, {
        width: '400px',
        data: { errorMessage: 'Sorry, unable to create bookmark.' }
      })
    );
  }

  ngOnDestroy() {
    if (this.bookmarkCreate$) {
      this.bookmarkCreate$.unsubscribe();
    }
  }
}
