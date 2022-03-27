import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees : any = [];
  // nameSearch: string ='';  

  searchCity:string ='';
  searchSalary:string ='';
  searchDepart:string ='';
  
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  

  getUsers(): void{
    this.employeeService.getUsers().subscribe(
      (res => {
        this.employees =res;
        console.log(this.employees);
      })
    );
  }
}