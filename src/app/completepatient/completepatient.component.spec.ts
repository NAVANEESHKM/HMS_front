import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletepatientComponent } from './completepatient.component';

describe('CompletepatientComponent', () => {
  let component: CompletepatientComponent;
  let fixture: ComponentFixture<CompletepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompletepatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
