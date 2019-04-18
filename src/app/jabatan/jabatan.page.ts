import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jabatan',
  templateUrl: './jabatan.page.html',
  styleUrls: ['./jabatan.page.scss'],
})
export class JabatanPage implements OnInit {

  public items:any;

  constructor(public navCtrl:NavController, public http:HttpClient, private router: Router) {

    this.getData();

   }

  ngOnInit() {
  }

  getData(){
    let url = "http://localhost:8000/api/jabatan";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items = result;
      console.log(result);
    });
  }
}
