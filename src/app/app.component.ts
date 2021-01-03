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
  tempData: IPosts[] = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getPosts().subscribe(posts => {
      console.log(posts)
      this.myPosts = posts as IPosts[];
    })

    this.tempData = this.dataService.getDummyData();
  }

}