import { Component, OnInit } from '@angular/core';
import { Division } from '../model/division.model';
import { DivisionService } from '../services/division.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  divisions?:Division[];
  currentDivision:Division={};
  name='';
  http: any;
  status: string | undefined;
  constructor(private divisionService:DivisionService) { }

  ngOnInit(): void {
    this.retrieveDivision()
    this.http.delete('https://spa-api.aqiladigital.com/api/divisions/id')
    .subscribe(() => this.status = 'Delete successful');
  }

  retrieveDivision():void{
    this.divisionService.getAll()
      .subscribe(
        data=>{
          this.divisions=data;
          console.log(data);
        },
        error=>{
          console.log(error)
        }
      )

  }
}