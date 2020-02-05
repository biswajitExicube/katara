import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreferencesPage } from './preferences';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PreferencesPage,
  ],
  imports: [
    IonicPageModule.forChild(PreferencesPage),
    ComponentsModule,
    TranslateModule.forRoot()
  ],
})
export class PreferencesPageModule {}
