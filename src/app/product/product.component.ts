import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : any = [];

  searchName:string ='';
  searchBrand:string ='';
  searchPrice:string ='';
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.productService.getUsers().subscribe(
      (res => {
        this.products =res;
        console.log(this.products);
      })
    );
  }
}

