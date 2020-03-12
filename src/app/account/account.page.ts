/** todo functions for changing user data */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { UserData } from "../providers/user-data";

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  username: string;

  constructor(
      public alertCtrl: AlertController,
      public router: Router,
      public userData: UserData,
  ) { }

  /** useful for other pages */
  ngAfterViewInit() {
    this.getUsername();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/login');
  }
}
