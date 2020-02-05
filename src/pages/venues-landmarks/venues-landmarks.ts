import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ChildPage } from '../child/child';
import { VisitingKataraPage } from '../visiting-katara/visiting-katara';

/**
 * Generated class for the VenuesLandmarksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-venues-landmarks',
  templateUrl: 'venues-landmarks.html',
})
export class VenuesLandmarksPage {

  public changeDir : boolean = false;

  public venuesList : any = [];
  public filterOpen : boolean;
  public btnActive : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private events : Events) {

    let localLang = localStorage.getItem('direction');
    if(localLang == 'right'){
      this.changeDir = true;
    }else if(localLang == 'left'){
      this.changeDir = false
    }else{
      this.changeDir = false
    }

    this.venuesList = [
      {
        image: '../assets/imgs/event-1.jpg',
        title : 'Katara Plazza',
        desc : 'Katara Plazza is an upcoming commercial center in the heart of Katara development. It comprises of shops, departmental stores, office spaces, service apartments, and a unique mail for children.'
      },
      {
        image: '../assets/imgs/event-2.jpg',
        title : 'Katara Plazza',
        desc : 'Katara Plazza is an upcoming commercial center in the heart of Katara development. It comprises of shops, departmental stores, office spaces, service apartments, and a unique mail for children.'
      },
      {
        image: '../assets/imgs/event-3.jpg',
        title : 'Katara Plazza',
        desc : 'Katara Plazza is an upcoming commercial center in the heart of Katara development. It comprises of shops, departmental stores, office spaces, service apartments, and a unique mail for children.'
      },
      {
        image: '../assets/imgs/event-1.jpg',
        title : 'Katara Plazza',
        desc : 'Katara Plazza is an upcoming commercial center in the heart of Katara development. It comprises of shops, departmental stores, office spaces, service apartments, and a unique mail for children.'
      },
      {
        image: '../assets/imgs/event-2.jpg',
        title : 'Katara Plazza',
        desc : 'Katara Plazza is an upcoming commercial center in the heart of Katara development. It comprises of shops, departmental stores, office spaces, service apartments, and a unique mail for children.'
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VenuesLandmarksPage');
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

  filterBtnClick(){
    this.filterOpen = !this.filterOpen;    
    console.log(this.filterOpen);
  }
  closeList(){
    this.filterOpen = false;
  }
  filterItem(name){
    this.filterOpen = false;
    if(name == 'all'){
      console.log("All Filter");
    } else if(name == 'performence'){
      console.log("Performence Filter");
    } else if(name == 'visual'){
      console.log("Visual Filter");
    }
  }

  forDetails(venue){
    console.log(venue);
    this.navCtrl.push(ChildPage, {parentData: venue, fromPage:'vanue'});
  }

}
