import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.styl']
})
export class RankingListComponent implements OnInit {

  public api: any = 'assets/data/rankingData.json';
  public appList: any[];

  public anotherApi: any = 'assets/data/rankingDataTwo.json';
  public anotherAppList: any[];

  public scrollTop: any;
  public scrollHeight: any;

  public footerFlag: any = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.api).subscribe((res: any) => {
      this.appList = res.layoutData;
    });
    fromEvent(window, 'scroll').subscribe(() => {
      this.scrollTop = this.getScroll().top;
      this.scrollHeight = this.getScroll().height;
      this.showFooter();
    });
  }

  getScroll() {
    let t;
    let h;
    if (document.documentElement) {
      t = document.documentElement.scrollTop;
      h = document.documentElement.scrollHeight;
    } else {
      t = document.body.scrollTop;
      h = document.body.scrollHeight;
    }
    return { top: t, height: h };
  }

  showFooter() {
    if (this.footerFlag) {
      const wHeight = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
      if (this.scrollTop + wHeight + 100 >= this.scrollHeight) {
        this.http.get(this.anotherApi).subscribe((res: any) => {
          this.anotherAppList = res.layoutData[0].dataList;
        });
        this.footerFlag = false;
      }
    }
  }
}
