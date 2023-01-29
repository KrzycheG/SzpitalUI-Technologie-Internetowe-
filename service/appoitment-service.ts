import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Appoitment} from "../dto/appoitment";

@Injectable()
export class appoitmentService {
  constructor(private http: HttpClient) {
  }

  addAppAoitmentsUrl = 'http://localhost:8080/addApp'
  getAllAppoitmentsUrl = 'http://localhost:8080/getApp'
  getPatientAppoitmentsUrl = 'http://localhost:8080/getPatientAppoitments'

  addAppAoitments(nameOfAppointment :string, dateOfAppointment :string, hoursOfAppointment :string){

    let params = new HttpParams()
    params.set('nameOfAppointment', nameOfAppointment)
    params.set('dateOfAppointment', dateOfAppointment)
    params.set('hourOfAppointment', hoursOfAppointment)

    return this.http.post(this.addAppAoitmentsUrl, params)
  }

  getAllAppoitments(){

    return this.http.get<Appoitment[]>(this.getAllAppoitmentsUrl)
  }

  getPatientAppoitments(pesel :string){

    let params = new HttpParams().append('pesel', pesel)

    return this.http.post<Appoitment[]>(this.getPatientAppoitmentsUrl,params)

  }

}
