import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotographyVideographyPage } from './photography-videography';
import { ComponentsModule } from '../../components/components.module';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    PhotographyVideographyPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotographyVideographyPage),
    ComponentsModule,

    RecaptchaModule.forRoot()
  ],
})
export class PhotographyVideographyPageModule {}
