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
      "category" : "fff",
      "company" : "Apppple",
      "img" : "./assets/project/1/workplace.png",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020",
    },
    {
      "id" : 5,
      "name" : "Ein cooles Projekt",
      "category" : "Programming",
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
      "category" : "fff",
      "company" : "Apppple",
      "img" : "./assets/project/1/workplace.png",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020"
    }
  ]

  toProject(project_id){

    this.id = project_id;

  }

}
