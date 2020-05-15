import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from '@ionic/angular';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {

  account_id;
  isPartner = false;
  isProvider = false

  constructor(private activatedRoute: ActivatedRoute, public storage : Storage) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params["id"];
    });
  }

  id;

  json = 
  [
    {
      "img_workplace" : "./assets/project/1/workplace.png"
    }
  ];

  ngOnInit() {
  }

  ionViewWillEnter(){
    // this.storage.ready().then(() => {
    // });
   this.storage.get('id').then((id) => {
     this.account_id = id;
   });
   this.storage.get('isPartner').then((state) => {
     this.isPartner = state;
   });
   this.storage.get('isProvider').then((state) => {
      this.isProvider = state;
   });

  }


}
