import { Component } from '@angular/core';
import {patientService} from "../../service/patient-service";

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent {


  constructor(private patServ :patientService) {
  }
  whatToChange: string = ""
  valuee: string = ""
  pesel: string = ""

  editPatient(){

    this.patServ.editPatient(this.whatToChange,this.valuee,this.pesel).subscribe();
}

}
