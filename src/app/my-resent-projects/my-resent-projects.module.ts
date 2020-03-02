import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyResentProjectsPageRoutingModule } from './my-resent-projects-routing.module';

import { MyResentProjectsPage } from './my-resent-projects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyResentProjectsPageRoutingModule
  ],
  declarations: [MyResentProjectsPage]
})
export class MyResentProjectsPageModule {}
