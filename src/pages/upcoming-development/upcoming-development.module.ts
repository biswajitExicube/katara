import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpcomingDevelopmentPage } from './upcoming-development';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    UpcomingDevelopmentPage,
  ],
  imports: [
    IonicPageModule.forChild(UpcomingDevelopmentPage),
    ComponentsModule
  ],
})
export class UpcomingDevelopmentPageModule {}
