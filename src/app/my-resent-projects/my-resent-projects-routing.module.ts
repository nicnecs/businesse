import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyResentProjectsPage } from './my-resent-projects.page';

const routes: Routes = [
  {
    path: '',
    component: MyResentProjectsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyResentProjectsPageRoutingModule {}
