import { Component } from '@angular/core';

import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public http : Http) {
    this.http = http;
  }

  link = "localhost:8080/businesse/getHomeData.php";

  ionViewDidLoad(){
   
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


  json = 
  
  [
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
