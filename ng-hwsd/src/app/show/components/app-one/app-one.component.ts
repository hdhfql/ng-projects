import { Component, OnInit, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';
import BScroll from 'better-scroll';

@Component({
  selector: 'app-app-one',
  templateUrl: './app-one.component.html',
  styleUrls: ['./app-one.component.styl']
})
export class AppOneComponent implements OnInit, AfterViewInit {

  @Input() public appList: any[];

  @ViewChild('scroll', {static: false}) scrollEl: ElementRef;

  @ViewChild('qq', {static: false}) qq: ElementRef;

  public myScroll: any;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {

    setTimeout(() => {
      this.qq.nativeElement.style.width = `${this.appList.length * 80}px`;
      this.myScroll = new BScroll(this.scrollEl.nativeElement, {
        click: true,
        scrollX: true,
        eventPassthrough: 'vertical'
      });
    }, 20);
  }

}
