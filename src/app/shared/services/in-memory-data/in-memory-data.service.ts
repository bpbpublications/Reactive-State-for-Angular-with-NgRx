import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as moment from 'moment';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      bookmarks: [
        {
          id: 1,
          name: 'Angular',
          url: 'https://angular.io/',
          created: moment().toDate(),
        },
        {
          id: 2,
          name: 'NgRx',
          url: 'https://ngrx.io/',
          created: moment().subtract(1, 'days').toDate()
        },
        {
          id: 3,
          name: 'Typescript - Javascript that scales',
          url: 'https://www.typescriptlang.org/',
          created: moment().subtract(2, 'days').toDate()
        },
        {
          id: 4,
          name: 'RxJS - A reactive programming library for JavaScript',
          url: 'https://rxjs.dev/',
          created: moment().subtract(3, 'days').toDate()
        }
      ]
    };
  }
}
