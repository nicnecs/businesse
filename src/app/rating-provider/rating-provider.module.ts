import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingProviderPageRoutingModule } from './rating-provider-routing.module';

import { RatingProviderPage } from './rating-provider.page';

// Import ionic-rating module
import { StarRatingModule } from 'ionic4-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingProviderPageRoutingModule,
    StarRatingModule
  ],
  declarations: [RatingProviderPage]
})
export class RatingProviderPageModule {}
