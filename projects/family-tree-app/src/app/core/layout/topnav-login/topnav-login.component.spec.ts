import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavLoginComponent } from './topnav-login.component';

describe('TopnavLoginComponent', () => {
  let component: TopnavLoginComponent;
  let fixture: ComponentFixture<TopnavLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
