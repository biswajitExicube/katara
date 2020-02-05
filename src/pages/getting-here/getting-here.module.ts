import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GettingHerePage } from './getting-here';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    GettingHerePage,
  ],
  imports: [
    IonicPageModule.forChild(GettingHerePage),
    ComponentsModule
  ],
})
export class GettingHerePageModule {}
