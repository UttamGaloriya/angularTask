import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayFunctionComponent } from './array-function.component';

describe('ArrayFunctionComponent', () => {
  let component: ArrayFunctionComponent;
  let fixture: ComponentFixture<ArrayFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
