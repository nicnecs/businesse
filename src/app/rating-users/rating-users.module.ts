import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingPageRoutingModule } from './rating-users-routing.module';

import { RatingPage } from './rating-users.page';

// Import ionic-rating module
import { StarRatingModule } from 'ionic4-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingPageRoutingModule,
    StarRatingModule
  ],
  declarations: [RatingPage]
})
export class RatingPageModule {}
