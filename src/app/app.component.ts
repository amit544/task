import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  id;
  data;
  show;
  constructor(private http:HttpClient){
    this.http.get('https://randomuser.me/api/?results=100').subscribe((res:Response)=>{
      this.data=res;
      console.log(res);
      // this.show=this.data.results["2"];
     console.log( this.data.results["2"]);
    })
  }
  

}