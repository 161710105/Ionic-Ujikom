import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Departemen',
      url: '/departemen',
      icon: 'business'  
    },
    {
      title: 'Divisi',
      url: '/divisi',
      icon: 'filing'  
    },
    {
      title: 'Jabatan',
      url: '/jabatan',
      icon: 'briefcase'  
    },
    {
      title: 'Karyawan',
      url: '/karyawan',
      icon: 'people'  
    },
    {
      title: 'Gaji',
      url: '/gaji',
      icon: 'cash'  
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
