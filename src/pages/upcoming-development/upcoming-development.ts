import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { VolunteersClubPage } from '../volunteers-club/volunteers-club';
import { StrategicPartnersPage } from '../strategic-partners/strategic-partners';



@IonicPage()
@Component({
  selector: 'page-upcoming-development',
  templateUrl: 'upcoming-development.html',
})
export class UpcomingDevelopmentPage {
  @ViewChild('slides') slides: Slides;

  public upcomingData : any = [];
  public redDot : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.upcomingData = [
      {
        image: '../assets/imgs/event-1.jpg',
        title : 'Katara Plazza',
        desc : 'Katara Plazza is an upcoming commercial center in the heart of Katara development. It comprises of shops, departmental stores, office spaces, service apartments, and a unique mail for children.'
      },
      {
        image: '../assets/imgs/event-2.jpg',
        title : 'Phase IV',
        desc : `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.'`
      },
      {
        image: '../assets/imgs/event-3.jpg',
        title : 'Katara Hills',
        desc : `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.'`
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingDevelopmentPage');
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    this.redDot = true;
  }
  tapContent(){
    this.redDot = false;
  }
  tapCard(){
    this.redDot = true;
  }

  next() {
    this.slides.slideNext();
    this.redDot = true;
  }

  prev() {
    this.slides.slidePrev();
    this.redDot = true;
  }

  about(){
    this.navCtrl.setRoot(AboutPage)
  }
  volunteerClub(){
    this.navCtrl.setRoot(VolunteersClubPage);
  }
  strategicPartner(){
    this.navCtrl.setRoot(StrategicPartnersPage);
  }

}
