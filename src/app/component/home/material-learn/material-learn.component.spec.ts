import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialLearnComponent } from './material-learn.component';

describe('MaterialLearnComponent', () => {
  let component: MaterialLearnComponent;
  let fixture: ComponentFixture<MaterialLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
