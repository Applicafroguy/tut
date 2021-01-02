import { Component, Input, OnInit } from '@angular/core';
import { IPosts } from '../models/post.model';
@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    @Input() post: IPosts | undefined;
    selected = false;
    constructor() {
    }

    ngOnInit() {
    }
}
