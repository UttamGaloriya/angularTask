import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDailogBoxComponent } from './view-dailog-box.component';

describe('ViewDailogBoxComponent', () => {
  let component: ViewDailogBoxComponent;
  let fixture: ComponentFixture<ViewDailogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDailogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDailogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
