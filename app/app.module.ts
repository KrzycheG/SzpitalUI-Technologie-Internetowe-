import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import {CdkTableModule} from "@angular/cdk/table";
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { MakeAppoitmentComponent } from './make-appoitment/make-appoitment.component';
import { PatientAppotimentsComponent } from './patient-appotiments/patient-appotiments.component';
import { HttpClientModule } from '@angular/common/http';
import {patientService} from "../service/patient-service";
import {appoitmentService} from "../service/appoitment-service";
import {MatTableModule} from "@angular/material/table";
import { AllAppoitmentsComponent } from './all-appoitments/all-appoitments.component';
import { employeeService} from "../service/employee-service";
import { RandomDogComponent } from './random-dog/random-dog.component';
import {randomDogService} from "../service/random-dog-service";

@NgModule({
  declarations: [
    AppComponent,
    PatientRegisterComponent,
    AllPatientsComponent,
    EditPatientComponent,
    MakeAppoitmentComponent,
    PatientAppotimentsComponent,
    AllAppoitmentsComponent,
    RandomDogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CdkTableModule,
        HttpClientModule,
        MatTableModule
    ],
  providers: [patientService, appoitmentService, employeeService,randomDogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
