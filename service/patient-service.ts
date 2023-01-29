import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Patient} from "../dto/patient";


@Injectable()
export class patientService {
  constructor(private http: HttpClient) { }

  addPatientUrl = 'http://localhost:8080/addPatient'
  getAllPatientsUrl = 'http://localhost:8080/getPatients'
  getPatientByPeselUrl = 'http://localhost:8080/getPatientsByPesel'
  editPatientUrl = 'http://localhost:8080/editPatient'
  addAppotimentByPeselUrl = 'http://localhost:8080/addAppoitment'
  loginUserUrl = 'http://localhost:8080/loginUser'

  public addPatient(name :string, surname :string, DOB :string, pesel :string, password :string){

    let paramss = new HttpParams()
      .append('name', name)
      .append('surname', surname)
      .append('DOB', DOB)
      .append('pesel', pesel)
      .append('password', password)


    return this.http.post(this.addPatientUrl,null,{params: paramss} )
  }

  getAllPatient(){
    return this.http.get<Patient[]>(this.getAllPatientsUrl);
  }


  getPatientByPesel(pesel :string){
    return this.http.post(this.getPatientByPeselUrl, new HttpParams().set('pesel',pesel))
  }

  editPatient(whatToChange :string, value :string, pesel :string){
    let params = new HttpParams()
      .append('whatToChange', whatToChange)
      .append('value', value)
      .append('pesel', pesel)

    return this.http.post(this.editPatientUrl, params)
  }

  addAppoitment(appoitmentId :string, pesel :string){

    let params = new HttpParams()
      .append('appoitmentId', appoitmentId)
      .append('pesel', pesel)

    return this.http.post(this.addAppotimentByPeselUrl, params)
  }

  userLogin(pesel: string, password :string){

    let params = new HttpParams()
      .append('pesel',pesel)
      .append('password',password)

    return this.http.post<number>(this.loginUserUrl, params);

  }
}




