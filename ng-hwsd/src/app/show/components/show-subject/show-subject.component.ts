import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-subject',
  templateUrl: './show-subject.component.html',
  styleUrls: ['./show-subject.component.styl']
})
export class ShowSubjectComponent implements OnInit {

  @Input() public list: any[];

  constructor() { }

  ngOnInit() {
  }

}
