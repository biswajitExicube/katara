import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhatsOnPage } from './whats-on';
import { CalendarModule } from 'ionic3-calendar-en';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    WhatsOnPage,
  ],
  imports: [
    IonicPageModule.forChild(WhatsOnPage),
    CalendarModule,
    ComponentsModule,
    TranslateModule.forRoot()
  ],
})
export class WhatsOnPageModule {}
