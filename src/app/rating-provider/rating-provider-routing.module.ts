import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatingProviderPage } from './rating-provider.page';

const routes: Routes = [
  {
    path: '',
    component: RatingProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingProviderPageRoutingModule {}
