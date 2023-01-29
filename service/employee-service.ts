import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from "@angular/core";


@Injectable()
export class employeeService {

  constructor(private http: HttpClient) {
  }

  loginEmployeeUrl = "http://localhost:8080/loginEmployee"
  loginEmployee(pesel :string, password :string){

    let params = new HttpParams()
      .append('pesel', pesel)
      .append('password', password)

    return this.http.post<number>(this.loginEmployeeUrl, params)

  }

}
