import { Injectable } from '@angular/core';
import {Category} from '../model/category';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  getAll() {
    return this.httpClient.get<Category[]>('http://localhost:3000/category');
  }
}
