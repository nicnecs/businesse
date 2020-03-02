import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateOverviewPage } from './private-overview.page';

const routes: Routes = [
  {
    path: '',
    component: PrivateOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateOverviewPageRoutingModule {}
