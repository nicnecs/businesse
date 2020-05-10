import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SponsoringPage } from './sponsoring.page';

const routes: Routes = [
  {
    path: '',
    component: SponsoringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SponsoringPageRoutingModule {}
