import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Bookmark {
  id: number;
  name: string;
  url: string;
  created: Date;
}

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  allBookmarks: Bookmark[]; // this will be filled up by a guard of /list route
  editBookmark: Bookmark;   // this will be filled up by a guard of /edit/:bookmarkId route
  filterText: string;       // this will be filled up by a filter textbox in app.component.html

  constructor(
    private http: HttpClient
  ) {}

  public getAll(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>('api/bookmarks');
  }

  public getById(bookmarkId): Observable<Bookmark> {
    return this.http.get<Bookmark>(`api/bookmarks/${bookmarkId}`);
  }

  public save(bookmark: Bookmark) {
    return this.http.post<Bookmark>(`api/bookmarks`, bookmark);
  }

  public update(bookmark): Observable<any> {
    return this.http.put<Bookmark>(`api/bookmarks`, bookmark);
  }
}
