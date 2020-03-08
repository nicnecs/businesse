import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UrlTree } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  project_id;

  partner_id;
  provider_id = 1;

  json = 
  [
    {
      "id" : 1,
      "name" : "Ein cooles Projekt",
      "category" : "Programming",
      "company" : "TeaSausage24",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020",
      "address" : ""
    },
    {
      "id" : 2,
      "name" : "Super cooles Projekt",
      "category" : "Handwerk",
      "company" : "Microsoft",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020",
      "address" : "",
      "entfernung" : "1,5km"
    },
    {
      "id" : 3,
      "name" : "Super Duper cooles Projekt",
      "category" : "fff",
      "company" : "Apppple",
      "img" : "assets/preview.png",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020",
      "address" : ""
    },
    {
      "id" : 4,
      "name" : "Ein cooles Projekt",
      "category" : "Programming",
      "company" : "TeaSausage24",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020"
    },
    {
      "id" : 5,
      "name" : "Super cooles Projekt",
      "category" : "Handwerk",
      "company" : "Microsoft",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020"
    },
    {
      "id" : 6,
      "name" : "Super Duper cooles Projekt",
      "category" : "fff",
      "company" : "Apppple",
      "img" : "/assets/preview.png",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020"
    }
  ]

  toProject(project_id){

    this.project_id = project_id;

    this.navCtrl.navigateForward(
      [
        '/project', 
        {
          "/" : this.project_id
        }
      ]
      );
  }

}
