import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.page.html',
  styleUrls: ['./profile-menu.page.scss'],
})
export class ProfileMenuPage implements OnInit {

  page: [
    {
      title: 'meine letzten Projekte',
      url: '/recent-projects/'
    },
    {
      title: 'Test',
      url: '/home'
    }
  ];

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
