import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { NameFilterPipe } from '../name-filter.pipe';
import { BrandFilterPipe } from '../brand-filter.pipe';
import { PriceFilterPipe } from '../price-filter.pipe';





@NgModule({
  declarations: [
    ProductComponent, NameFilterPipe,BrandFilterPipe,PriceFilterPipe
  ],
  imports: [
    CommonModule,FormsModule , ReactiveFormsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
