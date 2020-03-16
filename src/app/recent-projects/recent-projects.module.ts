import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentProjectsPageRoutingModule } from './recent-projects-routing.module';

import { RecentProjectsPage } from './recent-projects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentProjectsPageRoutingModule
  ],
  declarations: [RecentProjectsPage]
})
export class RecentProjectsPageModule {}
