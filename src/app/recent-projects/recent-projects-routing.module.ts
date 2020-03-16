import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentProjectsPage } from './recent-projects.page';

const routes: Routes = [
  {
    path: '',
    component: RecentProjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentProjectsPageRoutingModule {}
