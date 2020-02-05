import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController } from 'ionic-angular';
import { ChildPage } from '../child/child';

/**
 * Generated class for the CommunitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-communities',
  templateUrl: 'communities.html',
})
export class CommunitiesPage {

  public changeDir : boolean = false;
  public communitiesList : any = [];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, private events : Events) {

    let localLang = localStorage.getItem('direction');
    if(localLang == 'right'){
      this.changeDir = true;
    }else if(localLang == 'left'){
      this.changeDir = false
    }else{
      this.changeDir = false
    }
    
    this.communitiesList = [
      {
        name : 'Ard Canaan',
        description : `Ard Canaan Restaurent is a unique authentic restaurant represent the traditional Holy Land Cusine. Ard Canaan term leads to the cradle of...`,
        image : '../assets/imgs/event-2.jpg',
        logo : '../assets/imgs/event-2.jpg'
      },
      {
        name : 'Al Jazeera Media Cafe',
        description : `Ard Canaan Restaurent is a unique authentic restaurant represent the traditional Holy Land Cusine. Ard Canaan term leads to the cradle of...`,
        image : '../assets/imgs/event-1.jpg',
        logo : '../assets/imgs/event-1.jpg'
      },
      {
        name : 'U\'sha frshka',
        description : `Ard Canaan Restaurent is a unique authentic restaurant represent the traditional Holy Land Cusine. Ard Canaan term leads to the cradle of...`,
        image : '../assets/imgs/event-3.jpg',
        logo : '../assets/imgs/event-3.jpg'
      },
      {
        name : 'Ard Canaan',
        description : `Ard Canaan Restaurent is a unique authentic restaurant represent the traditional Holy Land Cusine. Ard Canaan term leads to the cradle of...`,
        image : '../assets/imgs/event-1.jpg',
        logo : '../assets/imgs/event-1.jpg'
      },
      {
        name : 'Ard Canaan',
        description : `Ard Canaan Restaurent is a unique authentic restaurant represent the traditional Holy Land Cusine. Ard Canaan term leads to the cradle of...`,
        image : '../assets/imgs/event-2.jpg',
        logo : '../assets/imgs/event-2.jpg'
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunitiesPage');
  }
  ionViewWillEnter(){

    let loading = this.loadingCtrl.create({
      // spinner: 'hide',
      content: `
      <ion-spinner name="stroke"></ion-spinner>
      <p>Loading</p>`,
      cssClass: 'customLoading',
      duration: 1000
    });
  
    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
  
    loading.present();

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
  forDetails(community){
    console.log(community);
    let loading = this.loadingCtrl.create({
      // spinner: 'hide',
      content: `
      <ion-spinner name="stroke"></ion-spinner>
      <p>Loading</p>`,
      cssClass: 'customLoading',
      duration: 1000
    });
  
    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
      this.navCtrl.push(ChildPage, {parentData: community});
    });
  
    loading.present();
    
  }

}
