import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';
import { timer } from 'rxjs';

import { Http } from '@angular/http';

import { Storage } from '@ionic/storage';
import { finalize } from 'rxjs/operators';


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
    private loadingCtrl : LoadingController,
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
    this.storage.get('id').then((id) => {
      this.id = id;
    });
    this.storage.get('isPartner').then((state) => {
      this.isPartner = state;
      console.log(this.isPartner);
      
    });
    this.storage.get('isProvider').then((state) => {
       this.isProvider = state;
       console.log(this.isProvider);
       
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
            if(this.no_Account && this.error){
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
    this.router.navigate(['/search', this.searchvalue]);
  }
  



  email = "";
  pass = "";
  send;
  partner_response : number;
  provider_response : number;
  no_Account : boolean = false;
  error : boolean = false;

  id : number;
  isPartner : boolean = false;
  isProvider : boolean = false;

  


  async login(email, pass){
    // this.id = null;
    // this.isPartner = false;
    // this.isProvider = false;
    this.email = email;
    this.pass = pass;
    console.log("LoginData: ", email, ",", pass);

    if(this.email.replace(/\s/g, "").length!=0 && this.pass.replace(/\s/g, "").length!=0){
      this.send = JSON.stringify({
        email : this.email,
        pass : this.pass
      });

      
      let loading = await this.loadingCtrl.create();
      await loading.present();
      this.http.post("http://businesse.eastus.cloudapp.azure.com:8080/businesse/LoginPartner.php", this.send).pipe(
        finalize(() => loading.dismiss())
      ).subscribe(data => {
        var response = data['_body'];
        var id = +response;
        console.log("Partner Response: ", response);
        console.log("Partner: ", this.partner_response);
        this.checkPartner(id);
      });
    }
  }

  async checkPartner(id){
    if(id==0){

      console.log("no partner");

      let loading = await this.loadingCtrl.create();
      await loading.present();

      this.http.post("http://businesse.eastus.cloudapp.azure.com:8080/businesse/LoginProvider.php", this.send).pipe(
        finalize(() => loading.dismiss())
      ).subscribe(data => {
        var response = data['_body'];
        var prov_id = +response;
        console.log("Provider Response: ", response);
        console.log("Provider: ", this.provider_response);

        this.checkProvider(prov_id);
      });
      
    }
    if(id>0){
      this.id = id;
      this.isPartner = true;
      this.isProvider = false;
      this.setStorage();
    }
    else{
      console.log("Error");
      this.error = true;
    }
  }


  checkProvider(id){
    if(id==0){
      console.log("no account");
      this.no_Account == true;
    }
    if(id>0){
      console.log("Provider");
          
      this.id = id;
      this.isProvider = true;
      this.isPartner = false;
      this.error = false;
      this.no_Account = false;
      this.setStorage();
    }
    else{
      console.log("Error Provider");
      this.error = true;
    }
  }

  setStorage(){
    console.log("ID: ", this.id, ", Partner: ", this.isPartner, ", Provider: ", this.isProvider);
    this.storage.set('id', this.id);
    this.storage.set('isPartner', this.isPartner);
    this.storage.set('isProvider', this.isProvider);
  }




  async logoutAlert(){
    await this.alertctrl.create({
    header: 'Logout?',
    animated: true,
    backdropDismiss: true,
    mode: 'md',
    buttons: [
      {
        text: 'Abbruch',
        role: 'cancel',
        cssClass: 'Primary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Logout',
        handler: (res) => {
          this.logout();
        }
      }
    ]
  }).then(res => res.present());

  
}





  logout(){
    console.log("LogOut");
    this.id = 0;
    this.isPartner = false;
    this.isProvider = false;
    this.setStorage();
  }

}
