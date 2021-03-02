import { Pipe, PipeTransform } from '@angular/core';

import { Bookmark } from '@app/shared/services/bookmark/bookmark.service';

@Pipe({
  name: 'fuzzy'
})
export class FuzzyPipe implements PipeTransform {
  transform(bookmarks: Bookmark[], ...args: any[]): any {
    const filterTerm = args[0];
    return filterTerm ? bookmarks.filter((b: Bookmark) => !!b.name.toLowerCase().includes(filterTerm.toLowerCase())) : bookmarks;
  }
}
