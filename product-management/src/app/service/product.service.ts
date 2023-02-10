import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) {
  }

  // findProductById(id: number) {
  //   return this.products.find(item => item.id === id);
  // }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  findById(id: number) {
    return this.httpClient.get<Product>('http://localhost:3000/products/' + id);
  }

  addProduct(event: any) {
    return this.httpClient.post('http://localhost:3000/products', event);
  }

  delete(id: number) {
    return this.httpClient.delete('http://localhost:3000/products/' + id);
  }

  // saveProduct(product) {
  //   this.products.push(product);
  // }
  //
  // updateProduct(id: number, product: Product) {
  //   for (let i = 0; i < this.products.length; i++) {
  //     if (this.products[i].id === id) {
  //       this.products[i] = product;
  //     }
  //   }
  // }
  //
  // deleteProduct(id: number) {
  //   for (let i = 0; i < this.products.length; i++) {
  //     if (this.products[i].id === id) {
  //       this.products.splice(i, 1);
  //     }
  //   }
  // }


}

