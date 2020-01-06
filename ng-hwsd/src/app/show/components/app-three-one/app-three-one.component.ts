import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-three-one',
  templateUrl: './app-three-one.component.html',
  styleUrls: ['./app-three-one.component.styl']
})
export class AppThreeOneComponent implements OnInit {

  @Input() app: any;

  constructor() { }

  ngOnInit() {
  }

}
