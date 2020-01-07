import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.styl']
})
export class AppListComponent implements OnInit {
  @Input() appList: any[];

  @Input() titleName: string;

  constructor() { }

  ngOnInit() {
  }

}
