import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileBusinessPageRoutingModule } from './profile-business-routing.module';

import { ProfileBusinessPage } from './profile-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileBusinessPageRoutingModule
  ],
  declarations: [ProfileBusinessPage]
})
export class ProfileBusinessPageModule {}
