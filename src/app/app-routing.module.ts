import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { 
    path: '', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'project/:id',
    loadChildren: () => import('./project/project.module').then( m => m.ProjectPageModule)
  },
  {
    path: 'project-create',
    loadChildren: () => import('./project-create/project-create.module').then( m => m.ProjectCreatePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'projects-overview-co',
    loadChildren: () => import('./projects-overview-co/projects-overview-co.module').then( m => m.ProjectsOverviewCoPageModule)
  },
  {
    path: 'project-detail/:id',
    loadChildren: () => import('./project-detail/project-detail.module').then( m => m.ProjectDetailPageModule)
  },
  {
    path: 'my-recent-projects',
    loadChildren: () => import('./my-recent-projects/my-recent-projects.module').then( m => m.MyRecentProjectsPageModule)
  },
  {
    path: 'profile-user',
    loadChildren: () => import('./profile-user/profile-user.module').then( m => m.ProfileUserPageModule)
  },
  {
    path: 'profile-business',
    loadChildren: () => import('./profile-business/profile-business.module').then( m => m.ProfileBusinessPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
