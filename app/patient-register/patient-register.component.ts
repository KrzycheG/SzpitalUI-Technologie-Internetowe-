import {Component, Injectable} from '@angular/core';
import {patientService} from 'src/service/patient-service'

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
@Injectable()
export class PatientRegisterComponent {

  constructor(private patServ :patientService) { }

  name: string = ""
  surname: string = ""
  dob: string = ""
  pesel: string =""
  password: string =""

  register() {
    this.patServ.addPatient(this.name, this.surname, this.dob, this.pesel, this.password).subscribe()
  }
}
