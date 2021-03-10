import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Occasion } from './occasion';

@Injectable({
  providedIn: 'root'
})
export class OccasionService {

  constructor(private http: HttpClient) { }
  getOccasions() {
    return this.http.get<Occasion[]>('http://3.83.162.199/api/occasions');
  }
}