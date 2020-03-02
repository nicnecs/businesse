import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyRecentProjectsPage } from './my-recent-projects.page';

const routes: Routes = [
  {
    path: '',
    component: MyRecentProjectsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyRecentProjectsPageRoutingModule {}
