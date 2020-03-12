import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectMenuPageRoutingModule } from './project-menu-routing.module';

import { ProjectMenuPage } from './project-menu.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    component: ProjectMenuPage,
    children: [
      {
        path: 'first',
        loadChildren: './first/first.module#FirstPageModule'
      },
      {
        path: 'second',
        loadChildren: './second/second.module#SecondPageModul'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/first'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectMenuPageRoutingModule
  ],
  declarations: [ProjectMenuPage]
})
export class ProjectMenuPageModule {}
