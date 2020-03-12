import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from '@ionic/angular';
import {Router, ActivatedRoute, Params} from '@angular/router';




@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {

  id;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params["id"];
    });
  }

  project = 
  [
    {
      "img_workplace" : "/assets/project/1/workplace.png"
    }
  ];

  ngOnInit() {
  }


}
