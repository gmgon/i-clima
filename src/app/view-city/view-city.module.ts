import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewCityPage } from './view-city.page';

import { IonicModule } from '@ionic/angular';

import { ViewCityPageRoutingModule } from './view-city-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCityPageRoutingModule
  ],
  declarations: [ViewCityPage]
})
export class ViewCityPageModule {}
