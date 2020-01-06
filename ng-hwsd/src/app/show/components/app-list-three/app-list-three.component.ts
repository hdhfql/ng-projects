import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-list-three',
  templateUrl: './app-list-three.component.html',
  styleUrls: ['./app-list-three.component.styl']
})
export class AppListThreeComponent implements OnInit {

  @Input() appList: any;

  constructor() { }

  ngOnInit() {
  }

}
