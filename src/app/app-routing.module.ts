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
    path: 'project/:id',
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
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  // },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
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
  },  {
    path: 'Aktuelle-Projekte',
    loadChildren: () => import('./projects-overview-co/pages/tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'Projekte',
    loadChildren: () => import('./projects-overview-co/pages/tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'Add-Projekte',
    loadChildren: () => import('./projects-overview-co/pages/tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'Angefragte-Projekte',
    loadChildren: () => import('./my-recent-projects/tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'Aktuelle-Projekte',
    loadChildren: () => import('./my-recent-projects/tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'Vergangene-Aufträge',
    loadChildren: () => import('./my-recent-projects/tab3/tab3.module').then( m => m.Tab3PageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
