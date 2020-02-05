import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UpcomingDevelopmentPage } from '../upcoming-development/upcoming-development';
import { VolunteersClubPage } from '../volunteers-club/volunteers-club';
import { StrategicPartnersPage } from '../strategic-partners/strategic-partners';


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  upcomingDev(){
    this.navCtrl.setRoot(UpcomingDevelopmentPage);
  }
  volunteerClub(){
    this.navCtrl.setRoot(VolunteersClubPage);
  }
  strategicPartner(){
    this.navCtrl.setRoot(StrategicPartnersPage);
  }
}
