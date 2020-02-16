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
