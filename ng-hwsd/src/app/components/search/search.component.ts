import { Component, OnInit } from '@angular/core';
import Axios from 'axios';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent implements OnInit {

  public api: any = 'assets/data/searchData.json';
  public appList: any[];

  constructor() { }

  ngOnInit() {
    Axios.get(this.api)
      .then((res: any) => {
        this.appList = res.data.list;
      });
  }

}
