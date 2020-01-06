import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppThreeOneComponent } from './app-three-one.component';

describe('AppThreeOneComponent', () => {
  let component: AppThreeOneComponent;
  let fixture: ComponentFixture<AppThreeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppThreeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppThreeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
