import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-departemen',
  templateUrl: './departemen.page.html',
  styleUrls: ['./departemen.page.scss'],
})
export class DepartemenPage implements OnInit {

  public items:any;

  constructor(public navCtrl:NavController, public http:HttpClient, private router: Router) {

    this.getData();

   }

  ngOnInit() {
  }

  getData(){
    let url = "http://localhost:8000/api/departemen";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items = result;
      console.log(result);
    });
  }

}
