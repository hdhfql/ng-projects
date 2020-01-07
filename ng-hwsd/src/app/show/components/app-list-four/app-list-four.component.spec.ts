import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListFourComponent } from './app-list-four.component';

describe('AppListFourComponent', () => {
  let component: AppListFourComponent;
  let fixture: ComponentFixture<AppListFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
