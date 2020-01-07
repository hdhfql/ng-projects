import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListComponent } from './components/app-list/app-list.component';
import { AppOneComponent } from './components/app-one/app-one.component';
import { ShowSubjectComponent } from './components/show-subject/show-subject.component';
import { AppListTwoComponent } from './components/app-list-two/app-list-two.component';
import { AppTwoOneComponent } from './components/app-two-one/app-two-one.component';
import { AppThreeOneComponent } from './components/app-three-one/app-three-one.component';
import { AppListThreeComponent } from './components/app-list-three/app-list-three.component';
import { AppListFourComponent } from './components/app-list-four/app-list-four.component';
import { AppFourListComponent } from './components/app-four-list/app-four-list.component';




@NgModule({
  declarations: [
    AppListComponent,
    AppOneComponent,
    ShowSubjectComponent,
    AppListTwoComponent,
    AppTwoOneComponent,
    AppThreeOneComponent,
    AppListThreeComponent,
    AppListFourComponent,
    AppFourListComponent
    ],
  imports: [
    CommonModule
  ],
  exports: [
    AppListComponent,
    ShowSubjectComponent,
    AppListTwoComponent,
    AppListThreeComponent,
    AppThreeOneComponent,
    AppListFourComponent
  ]
})
export class ShowModule { }
