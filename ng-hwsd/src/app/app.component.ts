import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements AfterViewInit {

  public activedRoute: any;
  public scrollTop: any = 0;
  public scrollHeight: any;
  public dataFlag: any = true;
  public ifRecommend: boolean;

  @ViewChild('router', {static: false}) routerEl: ElementRef;
  @ViewChild('recommendBtn', {static: false}) recommendBtn: ElementRef;

  constructor(private route: ActivatedRoute, private routeName: Router) { }

  ngAfterViewInit(): void {
    const ul = document.getElementsByTagName('ul')[0];
    const btns = document.querySelectorAll('.routerBtn');

    this.routeName.events.subscribe((event: any) => {// 获取当前路由地址*****
      if (event instanceof NavigationEnd) {
        this.activedRoute = event.url;
        this.ifRecommend = (this.activedRoute === '/' || this.activedRoute.includes('recommend')) ? true : false;

        if (this.ifRecommend) {
          ul.style.background = 'transparent';
          btns.forEach((item: any) => {
            item.style.color = '#fff';
            item.style.borderBottomColor = 'transparent';
          });
          this.recommendBtn.nativeElement.style.borderBottomColor = '#fff';
        } else {
          ul.style.background = '#fff';
          btns.forEach((item: any) => {
            item.style = '';
          });
        }
      }
    });

    fromEvent(window, 'scroll')
      .subscribe(() => {
        if (this.ifRecommend) {
          this.WindowScroll();
          this.btnTransform();
        }
      });

  }

  scrollPosition() {
    let t;
    let h;
    if (document.documentElement) {
      t = document.documentElement.scrollTop;
      h = document.documentElement.scrollHeight;
    } else {
      t = document.body.scrollTop;
      h = document.body.scrollHeight;
    }
    return {top: t, height: h};
  }

  WindowScroll() {
    this.scrollTop = this.scrollPosition().top;
    this.scrollHeight = this.scrollPosition().height;
  }

  btnTransform() {
    const btns = document.querySelectorAll('.routerBtn');
    const h = this.scrollTop > 165 ? 165 : this.scrollTop;

    this.routerEl.nativeElement.style.backgroundColor = `rgba(255, 255, 255, ${ h / 165 })`;

    if (this.scrollTop >= 120) {
      btns.forEach((item: any) => {
        item.style.color = '#000';
        item.style.borderBottomColor = 'rgba(0, 0, 0, .1)';
      });
      this.recommendBtn.nativeElement.style.borderBottomColor = '#007ddf';
      this.recommendBtn.nativeElement.style.color = '#007ddf';
    } else {
      btns.forEach((item: any) => {
        item.style.color = '#fff';
        item.style.borderBottomColor = 'transparent';
      });
      this.recommendBtn.nativeElement.style.borderBottomColor = '#fff';
    }
  }
}
