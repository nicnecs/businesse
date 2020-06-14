import { Component, OnInit } from '@angular/core';

import { CreateProjectOptions } from "../interfaces/create-project-options";
import {Router} from "@angular/router";
import {ProjectData} from "../providers/project-data";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.page.html',
  styleUrls: ['./project-create.page.scss'],
})
export class ProjectCreatePage {

  sponsors_set = [
    {
      id : "1",
      title : "Startseite",
      description : "Ihr Projekt wird zu oberster Stelle über anderen Projekten auf der Startseite angezeigt, wenn keine Filterfunktion benutzt wird.",
      price_per_day : "0.84"
    }
  ]

  sponsor = 0;
  single_price : number = null;
  duration_sponsor : number = null;

  current: string = new Date().toISOString();

  clickCheck(){
    this.sponsored = !this.sponsored;
  }

  clickPrice(price){
    this.single_price = +price;
    if(this.sponsor < 1){
      this.single_price = null;
    }
  }

  createProject: CreateProjectOptions = {
    title: '',
    company: '',
    description: '',
    project_start: null,
    project_end: null,
    registration_period: null,
    address: '',
    address_comment: '',
    payment: null,
    number_participants: null
  };
  submitted = false;
  sponsored : boolean = false;
  spnsor_id;

  constructor(
      public router: Router,
      public projectData: ProjectData,
  ) { }

  onCreateProject(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.projectData.createProject(this.createProject.title);
      /**
       * todo navigateByURL
       */
    }
  }

}
