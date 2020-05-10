import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SponsoringPageRoutingModule } from './sponsoring-routing.module';

import { SponsoringPage } from './sponsoring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SponsoringPageRoutingModule
  ],
  declarations: [SponsoringPage]
})
export class SponsoringPageModule {}
