import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-list-two',
  templateUrl: './app-list-two.component.html',
  styleUrls: ['./app-list-two.component.styl']
})
export class AppListTwoComponent implements OnInit {

  @Input() appList: any[];

  constructor() { }

  ngOnInit() {
  }

}
