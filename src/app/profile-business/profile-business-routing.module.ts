import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileBusinessPage } from './profile-business.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileBusinessPageRoutingModule {}
