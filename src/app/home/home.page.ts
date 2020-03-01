import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  id = 0;

  json = 
  
  [
    {
      "id" : 5,
      "name" : "Ein cooles Projekt",
      "category" : "Programming",
      "company" : "TeaSausage24",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020",
      "address" : ""
    },
    {
      "id" : 29,
      "name" : "Super cooles Projekt",
      "category" : "Handwerk",
      "company" : "Microsoft",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020",
      "address" : "",
      "entfernung" : "1,5km"
    },
    {
      "id" : 19000,
      "name" : "Super Duper cooles Projekt",
      "category" : "fff",
      "company" : "Apppple",
      "img" : "assets/preview.png",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020",
      "address" : ""
    },
    {
      "id" : 5,
      "name" : "Ein cooles Projekt",
      "category" : "Programming",
      "company" : "TeaSausage24",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020"
    },
    {
      "id" : 29,
      "name" : "Super cooles Projekt",
      "category" : "Handwerk",
      "company" : "Microsoft",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020"
    },
    {
      "id" : 19000,
      "name" : "Super Duper cooles Projekt",
      "category" : "fff",
      "company" : "Apppple",
      "img" : "/assets/",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020"
    }
  ]

  toProject(project_id){

    this.id = project_id;

  }

}
