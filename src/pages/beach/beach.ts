import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Events } from 'ionic-angular';

import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper/js/swiper.esm.js';

Swiper.use([Navigation, Pagination, Scrollbar]);

@IonicPage()
@Component({
  selector: 'page-beach',
  templateUrl: 'beach.html',
})
export class BeachPage {

  @ViewChild(Slides) slides: Slides;

  public changeDir : boolean = false;

  public beachOption : any = 'aboutBeach';
  public beachImages : any = [];
  public beachActivites : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private events : Events) {

    let localLang = localStorage.getItem('direction');
    if(localLang == 'right'){
      this.changeDir = true;
    }else if(localLang == 'left'){
      this.changeDir = false
    }else{
      this.changeDir = false
    }

    this.beachImages = [
      {
        image :'../assets/imgs/event-1.jpg', 
        title: 'Lorem Ipsum',
        desc : 'Lorem ipsumdolor emet, Lorem ipsumdolor emet, Lorem ipsumdolor emet, Lorem ipsumdolor emet,'
      },
      {
        image :'../assets/imgs/event-2.jpg', 
        title: 'Lorem Ipsum',
        desc : 'Lorem ipsumdolor emet, Lorem ipsumdolor emet, Lorem ipsumdolor emet, Lorem ipsumdolor emet,'
      },
      {
        image :'../assets/imgs/event-3.jpg', 
        title: 'Lorem Ipsum',
        desc : 'Lorem ipsumdolor emet, Lorem ipsumdolor emet, Lorem ipsumdolor emet, Lorem ipsumdolor emet,'
      },
      {
        image :'../assets/imgs/event-1.jpg', 
        title: 'Lorem Ipsum',
        desc : 'Lorem ipsumdolor emet, Lorem ipsumdolor emet, Lorem ipsumdolor emet, Lorem ipsumdolor emet,'
      },
      {
        image :'../assets/imgs/event-2.jpg', 
        title: 'Lorem Ipsum',
        desc : 'Lorem ipsumdolor emet, Lorem ipsumdolor emet, Lorem ipsumdolor emet, Lorem ipsumdolor emet,'
      }
    ];
    this.beachActivites = [
      {
        image :'../assets/imgs/event-1.jpg', 
        title: 'Lorem Ipsum',
        time : 'Daily',
        name : 'Katara Beach',
        rate : 'QAR 120 (duration 30 minutes) Max 6 persons'
      },
      {
        image :'../assets/imgs/event-2.jpg', 
        title: 'Lorem Ipsum',
        time : 'Daily',
        name : 'Katara Beach',
        rate : 'QAR 120 (duration 30 minutes) Max 6 persons'
      },
      {
        image :'../assets/imgs/event-3.jpg', 
        title: 'Lorem Ipsum',
        time : 'Daily',
        name : 'Katara Beach',
        rate : 'QAR 120 (duration 30 minutes) Max 6 persons'
      },
      {
        image :'../assets/imgs/event-1.jpg', 
        title: 'Lorem Ipsum',
        time : 'Daily',
        name : 'Katara Beach',
        rate : 'QAR 120 (duration 30 minutes) Max 6 persons'
      },
      {
        image :'../assets/imgs/event-2.jpg', 
        title: 'Lorem Ipsum',
        time : 'Daily',
        name : 'Katara Beach',
        rate : 'QAR 120 (duration 30 minutes) Max 6 persons'
      },
      {
        image :'../assets/imgs/event-3.jpg', 
        title: 'Lorem Ipsum',
        time : 'Daily',
        name : 'Katara Beach',
        rate : 'QAR 120 (duration 30 minutes) Max 6 persons'
      }
    ];

    window.onload = function () {
      //initialize swiper when document ready
      var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true
      })
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeachPage');
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

}
