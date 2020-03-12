import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectListData } from "../providers/project-list-data";

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.page.html',
  styleUrls: ['./project-overview.page.scss'],
})
export class ProjectOverviewPage {
  project: any;

  constructor(
      private dataProvider: ProjectListData,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  id = 0;

  projectDetails= [
      {
        "title": "Burt Bear",
        "about": "Burt is a Bear.",
        "location": "Everywhere",
        "email": "this@example.com",
        "phone": "+1-541-754-3010",
        "id": "1"
      },
      {
        "title": "Charlie Cheetah",
        "about": "Charlie is a Cheetah.",
        "location": "Everywhere",
        "email": "this@example.com",
        "phone": "+1-541-754-3010",
        "id": "2"
      }
      ];

  init(project_id) {
    this.id = project_id;
  }

  ionViewDidEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const projectId = this.route.snapshot.paramMap.get('projectId');
      if (data && data.projectDetails) {
        for (const project of data.projectDetails) {
          if (project && project.id === projectId) {
            this.project = project;
            break;
          }
        }
      }
    })
  }

}
