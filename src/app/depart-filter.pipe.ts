import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'departFilter'
})
export class DepartFilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if(value.length ===0){
      return value
    }
    return value.filter(function(search: { depart: string; }){
      return search.depart.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }

}