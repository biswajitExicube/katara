import { NgModule } from '@angular/core';
import { TopMenuComponent } from './top-menu/top-menu';
import { CommonHeaderComponent } from './common-header/common-header';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { SocialSharing } from '@ionic-native/social-sharing'
@NgModule({
	declarations: [
		TopMenuComponent,
		CommonHeaderComponent
	],
	imports: [
		IonicPageModule,
		TranslateModule.forChild()
	],
	exports: [
		TopMenuComponent,
		CommonHeaderComponent
	],
	providers: [
		SocialSharing,
	]
})
export class ComponentsModule { }
