import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectsOverviewCoPageRoutingModule } from './projects-overview-co-routing.module';

import { ProjectsOverviewCoPage } from './projects-overview-co.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectsOverviewCoPageRoutingModule
  ],
  declarations: [ProjectsOverviewCoPage]
})
export class ProjectsOverviewCoPageModule {}
