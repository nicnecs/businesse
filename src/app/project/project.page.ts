import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {

  constructor(private navCtrl: NavController) { 
    //this.id = this.navParams.get('data');
  }



  id = 700;

  ngOnInit() {
  }


}
