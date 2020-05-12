import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCityPage } from './view-city.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCityPageRoutingModule {}
