import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmissionOpentimePage } from './admission-opentime';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AdmissionOpentimePage,
  ],
  imports: [
    IonicPageModule.forChild(AdmissionOpentimePage),
    ComponentsModule,
    TranslateModule.forRoot()
  ],
})
export class AdmissionOpentimePageModule {}
