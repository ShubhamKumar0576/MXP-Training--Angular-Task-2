import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any =[];
  baseUrl = './assets';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(`${this.baseUrl}/product_data.json`).pipe(
      map((res) => {
        this.products = res;
        return this.products;
      }),
      catchError(this.errorHandler)
  )
}

errorHandler (error: HttpErrorResponse){
  console.log(error);
  return throwError("Error");


}

}