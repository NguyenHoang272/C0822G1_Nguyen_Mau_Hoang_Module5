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
    return this.httpClient.get<Product[]>('http://localhost:3000/products?_sort=name&_order=asc');
  }


  addProduct(event: any) {
    return this.httpClient.post('http://localhost:3000/products', event);
  }

  findById(id: number): Observable<any> {
    return this.httpClient.get<any>('http://localhost:3000/products/' + id);
  }

  update(id: number, product: Product): Observable<any> {
    return this.httpClient.put<any>('http://localhost:3000/products/' + id, product);
  }

  delete(id: number) {
    return this.httpClient.delete('http://localhost:3000/products/' + id);
  }

  searchByNameAndCategory(nameSearch: string, category: string) {
    return this.httpClient.get<Product[]>('http://localhost:3000/products?name_like=' + nameSearch + '&&category.name=' + category);
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

