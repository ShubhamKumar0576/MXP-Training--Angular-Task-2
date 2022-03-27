import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'salaryFilter'
})
export class SalaryFilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if(value.length ===0){
      return value
    }
    return value.filter(function(search: { salary: string; }){
      return search.salary.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }

}