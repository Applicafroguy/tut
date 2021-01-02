import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { IPosts } from './models/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myPosts: IPosts[] = [];
  data: string[] = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    //    this.dataService.getData('datas').subscribe(posts => {
    //   this.data = posts as string[];
    // })
  }

  //   getPosts() {
  //     return this.dataService.getData('posts');
  //   }
  // }
}