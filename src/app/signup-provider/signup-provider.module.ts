import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupProviderPageRoutingModule } from './signup-provider-routing.module';

import { SignupProviderPage } from './signup-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupProviderPageRoutingModule
  ],
  declarations: [SignupProviderPage]
})
export class SignupProviderPageModule {}
