import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-two-one',
  templateUrl: './app-two-one.component.html',
  styleUrls: ['./app-two-one.component.styl']
})
export class AppTwoOneComponent implements OnInit {

  @Input() app: any;

  constructor() { }

  ngOnInit() {
  }

}
