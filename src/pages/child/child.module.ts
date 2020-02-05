import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildPage } from './child';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ChildPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildPage),
    ComponentsModule
  ],
})
export class ChildPageModule {}
