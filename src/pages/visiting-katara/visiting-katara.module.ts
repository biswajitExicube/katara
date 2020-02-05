import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitingKataraPage } from './visiting-katara';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    VisitingKataraPage,
  ],
  imports: [
    IonicPageModule.forChild(VisitingKataraPage),
    ComponentsModule,
    TranslateModule.forRoot()
  ],
})
export class VisitingKataraPageModule {}
