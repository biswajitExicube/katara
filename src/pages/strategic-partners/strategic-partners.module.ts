import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StrategicPartnersPage } from './strategic-partners';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    StrategicPartnersPage,
  ],
  imports: [
    IonicPageModule.forChild(StrategicPartnersPage),
    ComponentsModule
  ],
})
export class StrategicPartnersPageModule {}
