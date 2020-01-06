import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-four-list',
  templateUrl: './app-four-list.component.html',
  styleUrls: ['./app-four-list.component.styl']
})
export class AppFourListComponent implements OnInit {

  @Input() list: any[];
  @Input() maxHeight: number;

  constructor() { }

  ngOnInit() {
  }

}
