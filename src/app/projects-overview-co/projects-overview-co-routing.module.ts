import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsOverviewCoPage } from './projects-overview-co.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectsOverviewCoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsOverviewCoPageRoutingModule {}
