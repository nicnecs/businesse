import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-project-menu',
  templateUrl: './project-menu.page.html',
  styleUrls: ['./project-menu.page.scss'],
})
export class ProjectMenuPage implements OnInit {

  pages = [
    {
      title: 'Projekte erstellen',
      url: '/project-create/'
    },
    {
      title: 'Projektübersicht',
      url: '/project/'
    }
    ];

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) =>{
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}

