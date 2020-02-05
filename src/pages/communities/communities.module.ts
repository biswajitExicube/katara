import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunitiesPage } from './communities';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CommunitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunitiesPage),
    ComponentsModule,
    TranslateModule.forRoot()
  ],
})
export class CommunitiesPageModule {}
