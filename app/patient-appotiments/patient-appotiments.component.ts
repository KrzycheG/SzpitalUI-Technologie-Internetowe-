import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {appoitmentService} from "../../service/appoitment-service";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-patient-appotiments',
  templateUrl: './patient-appotiments.component.html',
  styleUrls: ['./patient-appotiments.component.css']
})
export class PatientAppotimentsComponent {

  appoitments: any[] = [];
  displayedColumns: string[] = ['id','Nazwa badania','Data','Godzina'];

  pesel: string = ""
  constructor(private appServ :appoitmentService) {}

  // @ts-ignore
  dataSource = new MatTableDataSource(this.patients);

    GetMyAppoitments(){
    this.appServ.getPatientAppoitments(this.pesel).subscribe(data =>{
      this.appoitments = [...this.appoitments, ...data];
      this.dataSource.data = this.appoitments;
    })
    console.log(this.appoitments)
    }



}


