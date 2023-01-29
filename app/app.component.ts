import {Component, Injectable} from '@angular/core';
import {appoitmentService} from "../service/appoitment-service";
import {patientService} from "../service/patient-service";
import {employeeService} from "../service/employee-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {

  constructor(private patServ :patientService, private employServ :employeeService) {}
  title = 'my-app';
  isLoggedIn: boolean = false;
  pesel: string = "";
  password: string = "";
  isEmployee: boolean = true;
  isCustomer: boolean = false;
  response :number = 0
  message :string = "Podaj swoje dane";
  login() {
    if(this.isCustomer){
      this.patServ.userLogin(this.pesel, this.password).subscribe(
        number => {

          this.response = number

          if(this.response == 1){
            this.isLoggedIn = true;
          }else{
            this.message = "Podano nieprawidłowe dane"
          }
        }


      );
    }else{
       this.employServ.loginEmployee(this.pesel,this.password).subscribe(number => {
         this.response = number
         if(this.response == 1){
           this.isLoggedIn = true;
         }else{
           this.message = "Podano nieprawidłowe dane"
         }
       });
    }

  }

  employeeSwitch(){
    this.isEmployee = true;
    this.isCustomer = false;
  }

  customerSwitch(){
    this.isEmployee = false;
    this.isCustomer = true;
  }
}
