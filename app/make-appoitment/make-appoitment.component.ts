import {Component, Injectable} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {appoitmentService} from "../../service/appoitment-service";
import {patientService} from "../../service/patient-service";

export interface PeriodicElement {
  name: string;
  data: string;
  hour: string;
}

@Component({
  selector: 'app-make-appoitment',
  templateUrl: './make-appoitment.component.html',
  styleUrls: ['./make-appoitment.component.css']
})

@Injectable()
export class MakeAppoitmentComponent {

  constructor(private patServ: patientService) {
  }
  badanie :string = "";
  pesel :string ="";

  makeAppotiment() {
    this.patServ.addAppoitment(this.badanie,this.pesel).subscribe()
  }
}

