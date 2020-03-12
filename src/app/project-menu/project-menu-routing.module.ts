import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectMenuPage } from './project-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectMenuPageRoutingModule {}
