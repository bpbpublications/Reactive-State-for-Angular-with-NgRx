import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BookmarkService, Bookmark } from '@app/shared/services/bookmark/bookmark.service';
import { isToday, isYesterday } from '@app/util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  allBookmarks: Bookmark[];
  todaysBookmarks: Bookmark[];
  yesterdaysBookmarks: Bookmark[];
  olderBookmarks: Bookmark[];

  constructor(public readonly bookmarkService: BookmarkService) {}

  ngOnInit() {
    this.allBookmarks = this.bookmarkService.allBookmarks;
    this.todaysBookmarks = this.allBookmarks.filter((bookmark) => isToday(bookmark.created));
    this.yesterdaysBookmarks = this.allBookmarks.filter((bookmark) => isYesterday(bookmark.created));
    this.olderBookmarks = this.allBookmarks.filter((bookmark) => {
      return !this.todaysBookmarks.find((b) => b.id === bookmark.id) &&
             !this.yesterdaysBookmarks.find((b) => b.id === bookmark.id);
    });
  }
}
