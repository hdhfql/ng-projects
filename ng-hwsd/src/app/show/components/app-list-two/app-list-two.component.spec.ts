import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListTwoComponent } from './app-list-two.component';

describe('AppListTwoComponent', () => {
  let component: AppListTwoComponent;
  let fixture: ComponentFixture<AppListTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
