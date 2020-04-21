import { Component } from '@angular/core';

import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform, LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import { error } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http : HttpClient, private nativeHttp : HTTP, private plt : Platform, private loadingCtrl : LoadingController) {
    
  }

  link = "localhost:8080/businesse/getHomeData.php";

  data = "Hallo";

  ionViewDidEnter(){
  //  this.getData();
  }

  async getStandardData(){

    let loading = await this.loadingCtrl.create();
    await loading.present();

    this.http.get('http://businesse.eastus.cloudapp.azure.com:8080/businesse/getHomeData.php').pipe(
      finalize(() => loading.dismiss())
    ).subscribe(data => {
      this.data = data['body'];
      console.log("On the Way");
      
    }, err => {
      console.log('Call error: ', err);
    })
  }

  // Für Cordova Ausführung
  // async getNativeData(){
  //   let loading = await this.loadingCtrl.create();
  //   await loading.present();

  //   let nativeCall = this.nativeHttp.get('http://businesse.eastus.cloudapp.azure.com:8080/businesse/getHomeData.php', {}, {
  //     'Content-Type': 'application/json'
  //   })
    
  //   from(nativeCall).pipe(
  //     finalize(() => loading.dismiss())
  //   ).subscribe(data => {
  //     console.log('native data: ', data);
  //     this.data = JSON.parse(data.data).results;
  //   }, err => {
  //     console.log('Call error: ', err);
  //   })
  // }


  //Normale Abfrage
  getData(){
    this.http.get('http://businesse.eastus.cloudapp.azure.com:8080/businesse/getHomeData.php').subscribe(data => 
    { 
      this.data = data['result'];
    }, success => {
      console.log("Success");
    }
    );
  }

  id = 0;
  category = "Alle Kategorien";

  Kategorien = 
  [
    {
      "name" : "Alle Kategorien"
    },
    {
      "name" : "Informatik",
      "id" : ""
    },
    {
      "name" : "Gastronomie",
      "id" : ""
    },
    {
      "name" : "Rohbau",
      "id" : ""
    },
    {
      "name" : "Verwaltung",
      "id" : ""
    },
    {
      "name" : "Lagermanagement",
      "id" : ""
    },
    {
      "name" : "Handwerk",
      "id" : ""
    },
    {
      "name" : "Versandhandel",
      "id" : ""
    },
    {
      "name" : "E-Commerce",
      "id" : ""
    },
    {
      "name" : "Gebäudereinigung",
      "id" : ""
    }

  ]

  json = [];


  backupjson = 
  
  [,
    {
      "id" : 5,
      "name" : "Ein cooles Projekt",
      "category" : "Informatik",
      "company" : "TeaSausage24",
      "img" : "./assets/project/1/workplace.png"
    },
    {
      "id" : 29,
      "name" : "Super cooles Projekt",
      "category" : "Handwerk",
      "company" : "Microsoft",
      "img" : "./assets/project/1/workplace.png"
    },
    {
      "id" : 19000,
      "name" : "Super Duper cooles Projekt",
      "category" : "Informatik",
      "company" : "Apppple",
      "img" : "./assets/project/1/workplace.png",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020",
    },
    {
      "id" : 5,
      "name" : "Ein cooles Projekt",
      "category" : "Gebäudereinigung",
      "company" : "TeaSausage24",
      "img" : "./assets/project/1/workplace.png"
    },
    {
      "id" : 29,
      "name" : "Super cooles Projekt",
      "category" : "Handwerk",
      "img" : "./assets/project/1/workplace.png",
      "company" : "Microsoft"
    },
    {
      "id" : 19000,
      "name" : "Super Duper cooles Projekt",
      "category" : "Rohbau",
      "company" : "Apppple",
      "img" : "./assets/project/1/workplace.png",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020"
    },
  ]

  toProject(project_id){

    this.id = project_id;

  }

  setCategory(name){
    this.category = name;
  }

}
