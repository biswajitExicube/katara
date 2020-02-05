import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarFinderModalPage } from './car-finder-modal';

@NgModule({
  declarations: [
    CarFinderModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CarFinderModalPage),
  ],
})
export class CarFinderModalPageModule {}
