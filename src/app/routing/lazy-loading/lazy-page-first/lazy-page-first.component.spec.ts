import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyPageFirstComponent } from './lazy-page-first.component';

describe('LazyPageFirstComponent', () => {
  let component: LazyPageFirstComponent;
  let fixture: ComponentFixture<LazyPageFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyPageFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyPageFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
