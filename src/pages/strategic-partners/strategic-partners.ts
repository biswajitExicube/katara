import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UpcomingDevelopmentPage } from '../upcoming-development/upcoming-development';
import { AboutPage } from '../about/about';
import { VolunteersClubPage } from '../volunteers-club/volunteers-club';

/**
 * Generated class for the StrategicPartnersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-strategic-partners',
  templateUrl: 'strategic-partners.html',
})
export class StrategicPartnersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StrategicPartnersPage');
  }
  upcomingDev() {
    this.navCtrl.setRoot(UpcomingDevelopmentPage);
  }
  about() {
    this.navCtrl.setRoot(AboutPage);
  }
  volunteerClub(){
    this.navCtrl.setRoot(VolunteersClubPage);
  }

}
