import {Component, Injectable} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {appoitmentService} from "../../service/appoitment-service";

@Component({
  selector: 'app-all-appoitments',
  templateUrl: './all-appoitments.component.html',
  styleUrls: ['./all-appoitments.component.css']
})
@Injectable()
export class AllAppoitmentsComponent {

  appoitments: any[] = [];
  displayedColumns: string[] = ['id','Nazwa badania','Data','Godzina'];

  constructor(private appServ :appoitmentService) {}

  // @ts-ignore
  dataSource = new MatTableDataSource(this.patients);

  ngOnInit(): void {
    this.appServ.getAllAppoitments().subscribe(data =>{
      this.appoitments = [...this.appoitments, ...data];
      this.dataSource.data = this.appoitments;
    })
    console.log(this.appoitments)
  }

}
