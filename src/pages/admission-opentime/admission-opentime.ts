import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { VisitingKataraPage } from '../visiting-katara/visiting-katara';

/**
 * Generated class for the AdmissionOpentimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admission-opentime',
  templateUrl: 'admission-opentime.html',
})
export class AdmissionOpentimePage {

  public changeDir : boolean = false;

  public segmentOptions : any = 'admission';

  constructor(public navCtrl: NavController, public navParams: NavParams, private events : Events) {
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
    console.log('ionViewDidLoad AdmissionOpentimePage');
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
  back(){
    this.navCtrl.setRoot(VisitingKataraPage);
  }

  segmentChanged(segment){
    console.log(segment);
  }

}
