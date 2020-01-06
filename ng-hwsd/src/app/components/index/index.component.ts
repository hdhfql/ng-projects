import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import Axios from 'axios';
import Swiper from 'swiper';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit {

  public scrollTop: any;
  public scrollHeight: any;
  public anotherDataFlag: any = true;

  public api: any = 'assets/data/recommendDataOne.json';
  public data: any;

  public anotherApi: any = 'assets/data/recommendDataTwo.json';
  public anotherData: any;

  public swiperList: any[];

  constructor() { }

  ngOnInit() {
    Axios.get(this.api)
      .then((res: any) => {
        res = res.data;
        if (res) {
          this.data = res.layoutData;
          this.swiperList = this.data[0].dataList;
        }
      })
      .catch(err => {
        console.log(err, 'errr');
      });

    // 轮播图初始化
    const timer = setInterval(() => {
      if (this.swiperList) {
        this.swiperInit();
        clearInterval(timer);
      }
    }, 20);

    fromEvent(window, 'scroll')
      .subscribe(event => {
        this.scrollTop = this.getScrollTop().top;
        this.scrollHeight = this.getScrollTop().height;
        this.getAnotherData();
      });
  }

  // 轮播图初始化
  swiperInit() {
    // tslint:disable-next-line: no-unused-expression
    new Swiper ('.swiper-container', {
      direction: 'horizontal', // 水平切换选项
      loop: true, // 循环模式选项
      speed: 600, // 滑动时间
      grabCursor: false, // 鼠标指针形状
      autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false // 手动滑动之后依然自动轮播
      }, // 自动滑动
      effect: 'slide', // 切换效果
      observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, // 修改swiper的父元素时，自动初始化swiper
      // navigation: {  // 分页器
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      // },
      pagination: { // 如果需要前进后退按钮
          el: '.swiper-pagination',
      },
      // scrollbar: { // 如果需要滚动条
      //     el: '.swiper-scrollbar',
      // }
    });
  }
  getScrollTop() {
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

  getAnotherData() {
    if (this.anotherDataFlag) {
      const wHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      if (this.scrollTop + wHeight + 100 >= this.scrollHeight) {
        Axios.get(this.anotherApi)
          .then((res: any) => {
            res = res.data;
            if (res) {
              this.anotherData = res.layoutData;
            }
          })
          .catch(err => {
            console.log(err, 'errr');
          });
        this.anotherDataFlag = false;
      }
    }
  }
}
