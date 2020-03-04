import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyRecentProjectsPageRoutingModule } from './my-recent-projects-routing.module';
import { MyRecentProjectsPage } from './my-recent-projects.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyRecentProjectsPageRoutingModule
  ],
  declarations: [MyRecentProjectsPage]
})
export class MyRecentProjectsPageModule {}
