import { Component, Input, OnInit } from '@angular/core';
import { IPosts } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  @Input() post: IPosts;
  constructor() { }

  ngOnInit(): void {
  }

}
