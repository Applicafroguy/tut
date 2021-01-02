import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPosts } from '../models/post.model';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) { }

  getData(endpoint: string) {
    return this.httpClient.get<IPosts[] | string[]>(`${this.apiUrl}/${endpoint}`);
  }
}
