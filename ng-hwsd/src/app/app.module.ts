import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowModule } from './show/show.module';
import { IndexComponent } from './components/index/index.component';
import { ClassifyComponent } from './components/classify/classify.component';
import { RankingListComponent } from './components/ranking-list/ranking-list.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ClassifyComponent,
    RankingListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
