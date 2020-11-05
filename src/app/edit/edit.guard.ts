import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { first, map, switchMap, catchError } from 'rxjs/operators';

import { BookmarkService } from '@app/shared/services/bookmark/bookmark.service';
import { ErrorDialogComponent } from '@app/shared/components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanActivate {
  constructor(
    private readonly bookService: BookmarkService,
    private readonly dialog: MatDialog
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.bookService.getById(route.params.bookmarkId).pipe(
      first(),
      map((bookmark) => this.bookService.editBookmark = bookmark),
      switchMap(() => this.activateRoute()),
      catchError(() => {
        this.dialog.open(ErrorDialogComponent, {
          width: '400px',
          data: { errorMessage: 'Sorry, unable to edit bookmark.', redirectTo: '/list' }
        });
        return of(false);
      })
    );
  }

  activateRoute() {
    return of(true);
  }
}
