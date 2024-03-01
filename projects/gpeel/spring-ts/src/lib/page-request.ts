import {Order} from './order';
import {HttpParams} from '@angular/common/http';

export class PageRequest {

  constructor(public page: number = 0,
              public size: number = 10,
              public sort?: Order[]) {
  }

  /**
   * builds URLs like: ?page=2&size=3&sort=titre,asc
   * which are compatible with a Spring Boot Rest Pageable API
   */
  toHttpParams(): HttpParams {
    let params = new HttpParams()
      .set('page', this.page.toString())
      .set('size', this.size.toString());
    if (this.sort && this.sort.length) {
      for (const order of this.sort) {
        // IF more than ONE Order ... does NOT work yet ???
        // DO not know hwo to set multiple same prop on HttpParams
        // but may be auto, do the testing
        params = params.set('sort', order.property + ',' + order.direction);
      }
    }
    return params;
  }

}
