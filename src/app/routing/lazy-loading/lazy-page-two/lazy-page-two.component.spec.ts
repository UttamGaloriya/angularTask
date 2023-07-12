import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyPageTwoComponent } from './lazy-page-two.component';

describe('LazyPageTwoComponent', () => {
  let component: LazyPageTwoComponent;
  let fixture: ComponentFixture<LazyPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyPageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
