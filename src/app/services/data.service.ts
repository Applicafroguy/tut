import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPosts } from '../models/post.model';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) { }

  getData(endpoint: string) {
    return this.httpClient.get<IPosts[] | string[]>(`${this.apiUrl}/${endpoint}`);
  }
  getPosts() {
    return this.httpClient.get<IPosts[]>(`${this.apiUrl}/posts`);
  }
  getDummyData(): IPosts[] {
    return [
      {
        userId: 1,
        promo: false,
        body: 'this is bad',
        title: 'Bro',
        id: 1
      },
      {
        userId: 2,
        promo: false,
        body: 'this is good',
        title: 'Nad',
        id: 2
      },
      {
        userId: 3,
        promo: false,
        body: 'this is good',
        title: 'Nad',
        id: 2
      }
    ];
  }
}
