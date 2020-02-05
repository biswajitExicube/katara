import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeachPage } from './beach';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    BeachPage,
  ],
  imports: [
    IonicPageModule.forChild(BeachPage),
    IonicImageViewerModule,
    ComponentsModule,
    TranslateModule.forRoot()
  ],
})
export class BeachPageModule {}
