

//     "sort": [
//         {
//           "direction": "ASC",
//           "property": "titre",
//           "ignoreCase": false,
//           "nullHandling": "NATIVE",
//           "ascending": true   // a redundant prop value is true if ACS, false if DESC
//           }
export enum ORDER_DIRECTION {
  ASC = 'asc', DESC = 'desc'
}

/**
 * Sort is the model used by Spring Data Page<T> in JS
 * a Page is received from REST pagination
 * the "sort" property of a Page<T> is a Sort[]
 */
export class Order {
  public ascending: boolean;

  constructor(public property: string,
              public direction: ORDER_DIRECTION,
              public ignoreCase?: boolean,
              public nullHandling?: string) {
    this.ascending = direction === ORDER_DIRECTION.ASC;
  }

}

export type Sort = Order[];

