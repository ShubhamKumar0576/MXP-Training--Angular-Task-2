import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { FilterPipe } from '../filter.pipe';
import { SalaryFilterPipe } from '../salary-filter.pipe';
import { DepartFilterPipe } from '../depart-filter.pipe';





@NgModule({
  declarations: [
    EmployeeComponent, FilterPipe,SalaryFilterPipe,DepartFilterPipe
  ],
  imports: [
    CommonModule, FormsModule , ReactiveFormsModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
