import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'project',
    loadChildren: () => import('./project/project.module').then( m => m.ProjectPageModule)
  },
  {
    path: 'project-menu',
    loadChildren: () => import('./project-menu/project-menu.module').then( m => m.ProjectMenuPageModule)
  },
  {
    path: 'project-create',
    loadChildren: () => import('./project-create/project-create.module').then( m => m.ProjectCreatePageModule)
  },
  {
    path: 'header-footer',
    loadChildren: () => import('./header-footer/header-footer.module').then( m => m.HeaderFooterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
<<<<<<< HEAD
    path: 'provider-projects',
    loadChildren: () => import('./provider-projects/provider-projects.module').then( m => m.ProviderProjectsPageModule)
=======
    path: 'projects-overview-co',
    loadChildren: () => import('./projects-overview-co/projects-overview-co.module').then( m => m.ProjectsOverviewCoPageModule)
  },
  {
    path: 'project-detail/:id',
    loadChildren: () => import('./project-detail/project-detail.module').then( m => m.ProjectDetailPageModule)
>>>>>>> ea57e86684f3e5dbfcac93e319cedec4b88fa163
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
