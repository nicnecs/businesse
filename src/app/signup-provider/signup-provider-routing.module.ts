import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupProviderPage } from './signup-provider.page';

const routes: Routes = [
  {
    path: '',
    component: SignupProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupProviderPageRoutingModule {}
