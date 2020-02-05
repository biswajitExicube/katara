import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolunteersClubPage } from './volunteers-club';
import { ComponentsModule } from '../../components/components.module';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    VolunteersClubPage,
  ],
  imports: [
    IonicPageModule.forChild(VolunteersClubPage),
    ComponentsModule,
    RecaptchaModule.forRoot()
  ],
})
export class VolunteersClubPageModule {}
