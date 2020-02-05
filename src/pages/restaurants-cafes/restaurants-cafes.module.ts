import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantsCafesPage } from './restaurants-cafes';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RestaurantsCafesPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantsCafesPage),
    ComponentsModule,
    TranslateModule.forRoot()
  ],
})
export class RestaurantsCafesPageModule {}
