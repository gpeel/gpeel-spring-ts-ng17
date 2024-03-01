//   "content": []
//   "totalPages": 2000,
//   "totalElements": 20000,
//   "last": false,
//   "size": 10,
//   "number": 0,
//     "sort": [
//         {
//           "direction": "ASC",
//           "property": "titre",
//           "ignoreCase": false,
//           "nullHandling": "NATIVE",
//           "ascending": true
//           }
//    ],
//   "numberOfElements": 10,
//   "first": true
import {Sort} from './order';

/**
 * Page is the model of Spring Data Page<T> in JS
 * a Page is received from REST pagination
 */
export class Page<T> {
  constructor(public content: T[],
              public totalPages: number,
              public totalElements: number,
              public last: boolean,
              public size: number,
              // tslint:disable-next-line:variable-name
              public number: number,
              public sort: Sort, // a Sort type is just Order[]
              public numberOfElements: number,
              public first: boolean) {}

}

