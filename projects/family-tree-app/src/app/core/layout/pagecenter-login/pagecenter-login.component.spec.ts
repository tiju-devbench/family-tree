import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecenterLoginComponent } from './pagecenter-login.component';

describe('PagecenterLoginComponent', () => {
  let component: PagecenterLoginComponent;
  let fixture: ComponentFixture<PagecenterLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagecenterLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagecenterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
