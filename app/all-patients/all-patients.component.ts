import {Component, Injectable, OnInit} from '@angular/core';
import {patientService} from "../../service/patient-service";
import {BehaviorSubject, map, Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
@Injectable()
export class AllPatientsComponent implements OnInit{

  patients: any[] = [];
  displayedColumns: string[] = ['name', 'surname', 'dob', 'pesel'];

  constructor(private patServ :patientService) {}

  // @ts-ignore
  dataSource = new MatTableDataSource(this.patients);

  ngOnInit(): void {
    this.patServ.getAllPatient().subscribe(data =>{
      this.patients = [...this.patients, ...data];
      this.dataSource.data = this.patients;
    })
    console.log(this.patients)
  }

}




