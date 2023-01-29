import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAppoitmentComponent } from './make-appoitment.component';

describe('MakeAppoitmentComponent', () => {
  let component: MakeAppoitmentComponent;
  let fixture: ComponentFixture<MakeAppoitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeAppoitmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeAppoitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
