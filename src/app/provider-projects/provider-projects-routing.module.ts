import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderProjectsPage } from './provider-projects.page';

const routes: Routes = [
  {
    path: '',
    component: ProviderProjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderProjectsPageRoutingModule {}
