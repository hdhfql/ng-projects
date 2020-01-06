import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ClassifyComponent } from './components/classify/classify.component';
import { RankingListComponent } from './components/ranking-list/ranking-list.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {
    path: 'recommend',
    component: IndexComponent
  },
  {
    path: 'classify',
    component: ClassifyComponent
  },
  {
    path: 'rankingList',
    component: RankingListComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: '',
    redirectTo: 'recommend',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
