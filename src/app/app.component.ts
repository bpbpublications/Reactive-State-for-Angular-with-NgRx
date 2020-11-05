import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BookmarkService } from '@app/shared/services/bookmark/bookmark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(public readonly bookmarkService: BookmarkService) {}
}
