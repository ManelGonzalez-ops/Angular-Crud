import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { IProduct } from 'src/assets/interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:3000/products"

  createProduct(productBody:  IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.url, productBody);
    }

  getAllProducts() : Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url)
  }

  

  getProduct(productId): Observable<IProduct>{
    let urla = `${this.url}/${productId}`
    return this.http.get<IProduct>(urla)
  }
  
  updateProduct(productId, productBody: IProduct): Observable<IProduct>{
    let urla = `${this.url}/${productId}`
    return this.http.put<IProduct>(urla, productBody)
  }

  deleteProduct(productId): Observable<IProduct> {
    let urla = `${this.url}/${productId}`
    return this.http.delete<IProduct>(urla)
  }

  searchByCategory(categoryId): Observable<IProduct>{
    return this.http.get<IProduct>(`${this.url}?category=${categoryId}`)
  }

  searchByDate(date): Observable<IProduct>{
    return this.http.get<IProduct>(`${this.url}?date=${date}`)
  }


}