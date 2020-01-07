import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOneComponent } from './app-one.component';

describe('AppOneComponent', () => {
  let component: AppOneComponent;
  let fixture: ComponentFixture<AppOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
