import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqPage } from './faq';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FaqPage,
  ],
  imports: [
    IonicPageModule.forChild(FaqPage),
    ComponentsModule,
    TranslateModule.forRoot()
  ],
})
export class FaqPageModule {}
