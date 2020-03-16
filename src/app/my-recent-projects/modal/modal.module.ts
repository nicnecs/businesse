import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, NavParams} from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { ModalPage } from './modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [ModalPage]
})

export class ModalPageModule {
  constructor(public modalCtrl: ModalController) {
  }
}
