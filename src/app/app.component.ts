import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';
import { timer } from 'rxjs';

import { Http } from '@angular/http';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showSplash = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertctrl : AlertController,
    public http : Http,
    public storage : Storage,
    public router : Router,
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.storage.ready().then(() => {
    });
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
            
            this.login(res.email, res.password);
            if(this.no_Account == true || this.error == true){
              return false;
            }
          }
        }
      ]
    }).then(res => res.present());

    
  }

  searchvalue = "";

  searching(evt){
    this.searchvalue = evt.target.value;
    this.searchvalue = this.searchvalue.replace(/\s/g, "+");
    this.router.navigate(['/', this.searchvalue]);
  }
  



  email = "";
  pass = "";
  partner_response : number = 0;
  provider_response : number = 0;
  no_Account : boolean = false;
  error : boolean = false;

  id : number;
  isPartner : boolean = false;
  isProvider : boolean = false;

  login(email, pass){
    // this.id = null;
    // this.isPartner = false;
    // this.isProvider = false;
    this.email = email;
    this.pass = pass;
    console.log("LoginData: ", email, ",", pass);

    if(this.email.replace(/\s/g, "").length!=0 && this.pass.replace(/\s/g, "").length!=0){
      var send = JSON.stringify({
        email : this.email,
        pass : this.pass
      });

      

      this.http.post("http://businesse.eastus.cloudapp.azure.com:8080/businesse/LoginPartner.php", send)
        .subscribe(data => {
        var response = data['_body'];
        this.partner_response = +response;
        console.log("Partner Response: ", response);
        console.log("Partner: ", this.partner_response);
      });
      
      if(this.partner_response == 0 && this.partner_response == null){

        this.http.post("http://businesse.eastus.cloudapp.azure.com:8080/businesse/LoginProvider.php", send)
        .subscribe(data => {
          var response = data['_body'];
          this.provider_response = +response;
          console.log("Provider Response: ", response);
          console.log("Provider: ", this.provider_response);
          
        });

        if(this.provider_response == 0 && this.provider_response == null){
          this.no_Account == true;
          return;
        }else if(this.provider_response > 0){
          this.id = this.provider_response;
          this.isProvider = true;
          this.isPartner = false;
          this.setStorage();
          return;
        }
        else{
          this.error = true;
          return;
        }

      }else if(this.partner_response > 0){
        this.id = this.partner_response;
        this.isPartner = true;
        this.isProvider = false;
        this.setStorage();
        return;
      }
      else{
        this.error = true;
        return;
      }

    }

    
  }

  setStorage(){
    console.log("ID: ", this.id, ", Partner: ", this.isPartner, ", Provider: ", this.isProvider);
    this.storage.set('id', this.id);
    this.storage.set('isPartner', this.isPartner);
    this.storage.set('isProvider', this.isProvider);

    
  }

}
