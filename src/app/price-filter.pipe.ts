import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if(value.length ===0){
      return value
    }
    return value.filter(function(search: { price: string; }){
      return search.price.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }

}