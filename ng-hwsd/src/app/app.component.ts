import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements AfterViewInit {

  public scrollTop: any = 0;
  public scrollHeight: any;
  public dataFlag: any = true;

  @ViewChild('router', {static: false}) routerEl: ElementRef;
  @ViewChild('recommendBtn', {static: false}) recommendBtn: ElementRef;

  constructor(private route: ActivatedRoute) { }

  ngAfterViewInit(): void {
    const ul = document.getElementsByTagName('ul')[0];
    const btns = document.querySelectorAll('.routerBtn');

    fromEvent(window, 'scroll')
    .subscribe(event => {
      this.route.queryParams.subscribe((res: any) => {
        if (res.route === 'recommend') {
          this.WindowScroll();
          this.btnTransform();
        }
      });
    });

    this.route.queryParams.subscribe((res: any) => {
      if (res.route === 'recommend') {
        ul.style.background = 'transparent';
        btns.forEach((item: any) => {
          item.style.color = '#fff';
          item.style.borderBottomColor = 'transparent';
        });
        this.recommendBtn.nativeElement.style.borderBottomColor = '#fff';
      } else {
        for (let i = 1; i < btns.length; i++) {
          btns[i].addEventListener('click', () => {
            ul.style.background = '#fff';
            btns.forEach((item: any) => {
              item.style = '';
            });
          });
        }
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
