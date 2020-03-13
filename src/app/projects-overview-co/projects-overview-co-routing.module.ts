import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsOverviewCoPage } from './projects-overview-co.page';

const routes: Routes = [
  {path:'',
  redirectTo: 'Aktuelle-Projekte',
  pathMatch: 'full' ,
  },
  {
  path: '',
  component: ProjectsOverviewCoPage,
  
  children:[
 
  {
    path: 'Aktuelle-Projekte',
    loadChildren: () => import('./pages/tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'Projekte',
    loadChildren: () => import('./pages/tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'Add-Projekte',
    loadChildren: () => import('./pages/tab3/tab3.module').then( m => m.Tab3PageModule)
  }
  ,
  {
    path: 'project-create',
    loadChildren: () => import('../project-create/project-create.module').then( m => m.ProjectCreatePageModule)
  }


  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsOverviewCoPageRoutingModule {}
