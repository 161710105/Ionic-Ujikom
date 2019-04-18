import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  detail:any;
  detail_karyawan: [];
  id :[];
  constructor( public navCtrl:NavController, public http:HttpClient, private router: Router ) { 

    this.getData(this.detail_karyawan);

  }

  ngOnInit() {

  }

  getData(detail_karyawan){
    let url = "http://localhost:8000/api/latihan/";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.detail = result;
      console.log(result);
    });
  }

  goBack() {

    this.navCtrl.navigateBack('/karyawan');

  }


}
