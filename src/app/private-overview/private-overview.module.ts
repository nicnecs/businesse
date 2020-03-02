import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivateOverviewPageRoutingModule } from './private-overview-routing.module';

import { PrivateOverviewPage } from './private-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivateOverviewPageRoutingModule
  ],
  declarations: [PrivateOverviewPage]
})
export class PrivateOverviewPageModule {}
