import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileMenuPageRoutingModule } from './profile-menu-routing.module';

import { ProfileMenuPage } from './profile-menu.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    component: ProfileMenuPage,
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
    ProfileMenuPageRoutingModule
  ],
  declarations: [ProfileMenuPage]
})
export class ProfileMenuPageModule {}
