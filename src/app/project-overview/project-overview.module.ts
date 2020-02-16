import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectOverviewPageRoutingModule } from './project-overview-routing.module';

import { ProjectOverviewPage } from './project-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectOverviewPageRoutingModule
  ],
  declarations: [ProjectOverviewPage]
})
export class ProjectOverviewPageModule {}
