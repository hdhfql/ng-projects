import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListThreeComponent } from './app-list-three.component';

describe('AppListThreeComponent', () => {
  let component: AppListThreeComponent;
  let fixture: ComponentFixture<AppListThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
