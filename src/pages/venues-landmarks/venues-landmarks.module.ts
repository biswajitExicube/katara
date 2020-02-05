import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VenuesLandmarksPage } from './venues-landmarks';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    VenuesLandmarksPage,
  ],
  imports: [
    IonicPageModule.forChild(VenuesLandmarksPage),
    ComponentsModule
  ],
})
export class VenuesLandmarksPageModule {}
