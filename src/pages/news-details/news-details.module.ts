import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsDetailsPage } from './news-details';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NewsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsDetailsPage),
    ComponentsModule
  ],
})
export class NewsDetailsPageModule {}
