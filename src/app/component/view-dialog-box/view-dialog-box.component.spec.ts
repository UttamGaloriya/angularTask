import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDialogBoxComponent } from './view-dialog-box.component';

describe('ViewDialogBoxComponent', () => {
  let component: ViewDialogBoxComponent;
  let fixture: ComponentFixture<ViewDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
