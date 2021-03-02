import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface Error {
  errorMessage: string;
  redirectTo: string;
}

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public error: Error,
    private router: Router
  ) {}

  okClick(): void {
    if (this.error.redirectTo) {
      this.router.navigate([this.error.redirectTo]);
    }
    this.dialogRef.close();
  }
}
