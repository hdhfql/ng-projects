import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFourListComponent } from './app-four-list.component';

describe('AppFourListComponent', () => {
  let component: AppFourListComponent;
  let fixture: ComponentFixture<AppFourListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFourListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
