import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAppotimentsComponent } from './patient-appotiments.component';

describe('PatientAppotimentsComponent', () => {
  let component: PatientAppotimentsComponent;
  let fixture: ComponentFixture<PatientAppotimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAppotimentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientAppotimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
