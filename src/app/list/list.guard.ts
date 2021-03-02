import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, switchMap, map, catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { BookmarkService } from '@app/shared/services/bookmark/bookmark.service';
import { ErrorDialogComponent } from '@app/shared/components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ListGuard implements CanActivate {
  constructor(
    private readonly bookService: BookmarkService,
    private readonly dialog: MatDialog
  ) {}

  canActivate(): Observable<boolean> {
    return this.bookService.getAll().pipe(
      first(),
      map((bookmarks) => this.bookService.allBookmarks = bookmarks),
      switchMap(() => this.activateRoute()),
      catchError(() => {
        this.dialog.open(ErrorDialogComponent, {
          width: '400px',
          data: { errorMessage: 'Sorry, unable to fetch bookmarks.' }
        });
        return of(false);
      })
    );
  }

  activateRoute() {
    return of(true);
  }
}
