import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { CityComponentModule } from '../city/city.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CityComponentModule, 
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
