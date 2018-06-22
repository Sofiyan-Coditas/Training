import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {
  orderByValue: any;
  transform(array:Array<any>, args?: any): any {
    if(array) {
      this.orderByValue = args
      let byVal = 1
      if(this.orderByValue.charAt(0) == "!") {
        byVal = -1
        this.orderByValue = this.orderByValue.substring(1)
      }
      console.log("byVal",byVal);
      console.log("orderByValue",this.orderByValue);

      if(this.orderByValue === "login"){
        array.sort((a: any, b: any) => {
          if(a.login < b.login) {
            return -1*byVal;
          } else if (a.login > b.login) {
            return 1*byVal;
          } else {
            return 0;
          }
        });
      } else if(this.orderByValue === "score"){
        array.sort((a: any, b: any) => {
          if(a.score < b.score) {
            return -1*byVal;
          } else if (a.score > b.score) {
            return 1*byVal;
          } else {
            return 0;
          }
        });
      }
      return array;
    }
  }

}
