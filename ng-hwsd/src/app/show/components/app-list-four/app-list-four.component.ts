import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-list-four',
  templateUrl: './app-list-four.component.html',
  styleUrls: ['./app-list-four.component.styl']
})
export class AppListFourComponent implements OnInit {

  @Input() appList: any[];

  constructor() { }

  ngOnInit() {
  }

}
