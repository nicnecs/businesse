import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProviderProjectsPageRoutingModule } from './provider-projects-routing.module';

import { ProviderProjectsPage } from './provider-projects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProviderProjectsPageRoutingModule
  ],
  declarations: [ProviderProjectsPage]
})
export class ProviderProjectsPageModule {}
