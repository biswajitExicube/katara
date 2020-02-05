import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhatsOnCategoryListPage } from './whats-on-category-list';

@NgModule({
  declarations: [
    WhatsOnCategoryListPage,
  ],
  imports: [
    IonicPageModule.forChild(WhatsOnCategoryListPage),
  ],
})
export class WhatsOnCategoryListPageModule {}
