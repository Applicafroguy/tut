import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss']
})
export class IdComponent implements OnInit {
  @Input() userId: string = '';
  @Input() myId: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
