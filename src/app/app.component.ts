import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';
import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showSplash = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertctrl : AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(5000).subscribe(()=> this.showSplash = false)
    });
  }

  async loginAlert(){
      await this.alertctrl.create({
      header: 'Login',
      animated: true,
      backdropDismiss: true,
      mode: 'md',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Passwort'
        }
      ],
      buttons: [
        {
          text: 'Schließen',
          role: 'cancel',
          cssClass: 'Primary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Login',
          handler: (res) => {
            console.log(res.email);
            this.login(res.email, res.password);
            
          }
        }
      ]
    }).then(res => res.present());

    
  }

  logindata = "Email Pass"

  login(email, pass){
    this.logindata = email + " " + pass;
  }

}
