import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { VolunteersClubPage } from '../volunteers-club/volunteers-club';
import { AdmissionOpentimePage } from '../admission-opentime/admission-opentime';
import { GettingHerePage } from '../getting-here/getting-here';
import { HallReservationPage } from '../hall-reservation/hall-reservation';
import { VenuesLandmarksPage } from '../venues-landmarks/venues-landmarks';
import { PhotographyVideographyPage } from '../photography-videography/photography-videography';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-visiting-katara',
  templateUrl: 'visiting-katara.html',
})
export class VisitingKataraPage {
  public changeDir : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private events : Events, private iab: InAppBrowser) {
    let localLang = localStorage.getItem('direction');
    if(localLang == 'right'){
      this.changeDir = true;
    }else if(localLang == 'left'){
      this.changeDir = false
    }else{
      this.changeDir = false
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitingKataraPage');
  }
  ionViewWillEnter(){
    this.events.subscribe('direction', (currentLang) => {
      // user and time are the same arguments passed in `events.publish(user, time)`;
      if(currentLang == false){
        this.changeDir = true;
      }else if(currentLang == true){
        this.changeDir = false
      }else{
        this.changeDir = false
      }
      
      console.log('Current Language ', currentLang);
      console.log('Change Direction ',this.changeDir);
    });
  }

  visitPage(page, browserURL:string){
    if(page == 'admission'){
      this.navCtrl.setRoot(AdmissionOpentimePage);
    }else if(page == 'around'){
      this.navCtrl.setRoot(GettingHerePage);
    }else if(page == 'hall'){
      // this.navCtrl.setRoot(HallReservationPage)
      console.log(browserURL);
      this.iab.create(browserURL, '_blank', 'location=yes');
    }else if(page == 'venues'){
      this.navCtrl.setRoot(VenuesLandmarksPage);
    }else if(page == 'photography'){
      // this.navCtrl.setRoot(PhotographyVideographyPage);
      console.log(browserURL);
      this.iab.create(browserURL, '_blank', 'location=yes');
    }else if(page == 'volunteer'){
      this.navCtrl.setRoot(VolunteersClubPage);
    }
  }

  
}
