import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BenhNhan} from '../model/benh-nhan';

@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<BenhNhan[]>('http://localhost:3000/benhNhans');
  }
}
