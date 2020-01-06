import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTwoOneComponent } from './app-two-one.component';

describe('AppTwoOneComponent', () => {
  let component: AppTwoOneComponent;
  let fixture: ComponentFixture<AppTwoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTwoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTwoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
