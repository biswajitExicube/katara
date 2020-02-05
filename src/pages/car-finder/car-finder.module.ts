import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarFinderPage } from './car-finder';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CarFinderPage,
  ],
  imports: [
    IonicPageModule.forChild(CarFinderPage),
    ComponentsModule,
    TranslateModule.forRoot()
  ],
})
export class CarFinderPageModule {}
