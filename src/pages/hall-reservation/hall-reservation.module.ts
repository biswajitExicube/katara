import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HallReservationPage } from './hall-reservation';
import { ComponentsModule } from '../../components/components.module';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    HallReservationPage,
  ],
  imports: [
    IonicPageModule.forChild(HallReservationPage),
    ComponentsModule,
    RecaptchaModule.forRoot()
  ],
})
export class HallReservationPageModule {}
