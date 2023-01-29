import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAppoitmentsComponent } from './all-appoitments.component';

describe('AllAppoitmentsComponent', () => {
  let component: AllAppoitmentsComponent;
  let fixture: ComponentFixture<AllAppoitmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAppoitmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAppoitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
