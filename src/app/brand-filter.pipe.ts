import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if(value.length ===0){
      return value
    }
    return value.filter(function(search: { brandname: string; }){
      return search.brandname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }

}
