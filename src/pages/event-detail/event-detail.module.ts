import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventDetailPage } from './event-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EventDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EventDetailPage),
    ComponentsModule
  ],
})
export class EventDetailPageModule {}
