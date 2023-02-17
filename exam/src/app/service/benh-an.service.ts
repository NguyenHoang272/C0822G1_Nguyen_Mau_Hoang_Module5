import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BenhAn} from '../model/benh-an';

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<BenhAn[]> {
    return this.httpClient.get<BenhAn[]>('http://localhost:3000/benhAns');
  }


  findById(id: number): Observable<any> {
    return this.httpClient.get<any>('http://localhost:3000/benhAns/' + id);
  }


  delete(id: number) {
    return this.httpClient.delete('http://localhost:3000/benhAns/' + id);
  }

  update(id: number, benhan: BenhAn): Observable<any> {
    return this.httpClient.put<any>('http://localhost:3000/benhAns/' + id, benhan);
  }
}
