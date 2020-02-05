import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Events, AlertController, LoadingController } from 'ionic-angular';

import * as $ from 'jquery'
import { EventDetailPage } from '../event-detail/event-detail';
import { WhatsOnCategoryListPage } from '../whats-on-category-list/whats-on-category-list';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { WhatsonData } from '../../redux/core/whatson_session';
import { WhatsOnAction } from '../../redux/actions/whatson_actions';



@IonicPage()
@Component({
  selector: 'page-whats-on',
  templateUrl: 'whats-on.html'
})
export class WhatsOnPage {

  @ViewChild('mySlider') slider: Slides;

  @select(['whatsonData', 'whatsonData'])
  readonly whatsonData$:Observable<WhatsonData>;


  public changeDir: boolean = false;
  public currLang : string;

  public WOSegemnt = "happen";
  public happenArr: any = [];
  public todayList : any = [];
  public tommorowList : any = [];
  public categoryArr: any = [];
  public ageGroup: any = [];

  public showUpcomming : boolean = false;

  

  constructor(
    public navCtrl: NavController, public loadingCtrl: LoadingController,
    public navParams: NavParams, private events: Events, public alertCtrl: AlertController,
    public whatsonAction: WhatsOnAction
    ) {

      if(localStorage.getItem('direction')){
        let directionPLT = localStorage.getItem('direction');
        if(directionPLT == 'left'){
          this.currLang = 'en';
        } else if(directionPLT == 'right'){
          this.currLang = 'ar';
        }else{
          this.currLang = 'en';
        }
      // console.log(directionPLT);
      }
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

    this.whatsonAction.whatsonFetch(this.currLang);
    this.whatsonData$.subscribe((data) => {
      if(data){
        console.log(data);
      }
    })


    this.happenArr = [
      {
        image: '../assets/imgs/event-1.jpg',
        type: 'Programs',
        name: 'Al Thuraya Planetarium (For Schools)',
        startDate: '15 September, 2019',
        endDate: '4 October, 2019',
        startTime: '12.30 PM',
        endTime: '12.30 AM',
        status: 'free',
        desc: 'Traditions Preserved and Renewed.',
        location: 'Building 41',
        time: 'today'
      },
      {
        image: '../assets/imgs/event-2.jpg',
        type: 'Programs',
        name: 'Al Thuraya Planetarium (For Schools)',
        startDate: '15 September, 2019',
        endDate: '4 October, 2019',
        startTime: '12.30 PM',
        endTime: '12.30 AM',
        status: 'free',
        desc: 'Traditions Preserved and Renewed.',
        location: 'Building 41',
        time: 'today'
      },
      {
        image: '../assets/imgs/event-3.jpg',
        type: 'Programs',
        name: 'Al Thuraya Planetarium (For Schools)',
        startDate: '15 September, 2019',
        endDate: '4 October, 2019',
        startTime: '12.30 PM',
        endTime: '12.30 AM',
        status: 'free',
        desc: 'Traditions Preserved and Renewed.',
        location: 'Building 41',
        time: 'tommorow'
      },
      {
        image: '../assets/imgs/event-2.jpg',
        type: 'Programs',
        name: 'Al Thuraya Planetarium (For Schools)',
        startDate: '15 September, 2019',
        endDate: '4 October, 2019',
        startTime: '12.30 PM',
        endTime: '12.30 AM',
        status: 'register',
        desc: 'Traditions Preserved and Renewed.',
        location: 'Building 41',
        time: 'tommorow'
      }
    ]
    this.categoryArr = [
      {
        name: 'Festivals',
        icon: 'home'
      },
      {
        name: 'Exhibitions',
        icon: 'home'
      },
      {
        name: 'WorkShops',
        icon: 'home'
      },
      {
        name: 'Music',
        icon: 'home'
      },
      {
        name: 'LivePerformance',
        icon: 'home'
      },
      {
        name: 'Lectures',
        icon: 'home'
      },
      {
        name: 'Courses',
        icon: 'home'
      },
      {
        name: 'Activities',
        icon: 'home'
      },
      {
        name: 'Films',
        icon: 'home'
      },
      {
        name: 'Competitions',
        icon: 'home'
      },
      {
        name: 'Cultural',
        icon: 'home'
      },
      {
        name: 'Photography',
        icon: 'home'
      },
      {
        name: 'Planetarium',
        icon: 'home'
      },
      {
        name: 'Programs',
        icon: 'home'
      }
    ]
    this.ageGroup = [
      {
        name: 'School Students',
        icon: 'home'
      },
      {
        name: 'Families and Early Years',
        icon: 'home'
      },
      {
        name: 'University Students',
        icon: 'home'
      },
      {
        name: 'Adults',
        icon: 'home'
      },
      {
        name: 'General Audience',
        icon: 'home'
      }
    ]
    this.dataFetch();
    ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhatsOnPage');
  }
  dataFetch() {
    for(let i=0; i<this.happenArr.length; i++){
      if(this.happenArr[i].time == 'today'){
        this.todayList.push(this.happenArr[i])
      }else{
        this.tommorowList.push(this.happenArr[i])
      }
    }
    if(this.todayList && this.tommorowList){
      // console.log(this.todayList);
      // console.log(this.tommorowList);
    }
  }

  ngDoCheck(){
    $('.innerHappen').on('scroll', function() { 
      var todayTextTop = $('.happenText').offset().top;
      var upcommingTextTop = $('.container').offset().top;
      if(upcommingTextTop < todayTextTop){
        // console.log("less");
        this.position();
      }else{
        this.showUpcomming = false;
        // console.log("Big");
      }
    }.bind(this));
   
  }

  position(){
    if(this.showUpcomming == false){
      this.showUpcomming = true;
    }
  }
  onSegmentChanged(segmentButton) {

    if (segmentButton.value == 'happen') {
      this.slider.slideTo(0, 500);
    } else if (segmentButton.value == 'category') {
      this.slider.slideTo(1, 500);
    } /*else if (segmentButton.value == 'ageGroup') {
      this.slider.slideTo(2, 500);
    } */else if (segmentButton.value == 'date') {
      this.slider.slideTo(2, 500);
    }
  }
  onSlideChanged() {
    this.scrollSegment();
    let currentIndex = this.slider.getActiveIndex();
    if (currentIndex == 0) {
      this.WOSegemnt = 'happen';
    } else if (currentIndex == 1) {
      this.WOSegemnt = 'category';
    } /*else if (currentIndex == 2) {
      this.WOSegemnt = 'ageGroup';
    } */else if (currentIndex == 2) {
      this.WOSegemnt = 'date';
    }
  }
  scrollSegment() {
    let currentIndex = this.slider.getActiveIndex();
    if (currentIndex == 0) {
      var scrollArea = $('.segmentDiv');
      var toScroll = $('.segmentDiv .segment-button');
      if (this.changeDir == true) {
        toScroll.each(function () {
          scrollArea.animate({ scrollLeft: '60px' });
        });
      } else {
        toScroll.each(function () {
          scrollArea.animate({ scrollLeft: '0px' });
        });
      }
    } else if (currentIndex > 0 && currentIndex == 1) {
      var scrollArea = $('.segmentDiv');
      var toScroll = $('.segmentDiv .segment-button');
      if (this.changeDir == true) {
        toScroll.each(function () {
          scrollArea.animate({ scrollLeft: '30px' });
        });
      } else {
        toScroll.each(function () {
          scrollArea.animate({ scrollLeft: '30px' });
        });
      }
    } else if (currentIndex > 1 && currentIndex == 2) {
      var scrollArea = $('.segmentDiv');
      var toScroll = $('.segmentDiv .segment-button');
      if (this.changeDir == true) {
        toScroll.each(function () {
          scrollArea.animate({ scrollLeft: '0px' });
        });
      } else {
        toScroll.each(function () {
          scrollArea.animate({ scrollLeft: '90px' });
        });
      }
    }
    console.log(currentIndex);
  }

  categoryDetail(category) {
    // console.log(category);
    this.navCtrl.push(WhatsOnCategoryListPage, { listOf: category });
  }

  onDaySelect(e) {

    var clickDate = e.month + 1 + '/' + e.date + '/' + e.year;
    var newClickDate = new Date(clickDate);
    var currDate = new Date();
    var Difference_In_Time = newClickDate.getTime() - currDate.getTime();
    var Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

    if (Difference_In_Days < 0) {
      let alert = this.alertCtrl.create({
        message: 'Sorry You Can\'t Select a date earlier than today',
        cssClass: 'backDateAlert'
      });
      alert.present();
      setTimeout(() => {
        alert.dismiss();
      }, 20000)
      $(document).ready(function(){
        $(".select").addClass("removeSelect");
      })
    } else {
      var date = e.month+1+'/'+e.date+'/'+e.year
      var currDate = new Date(date);
      var currDateString = currDate.toDateString()
      var date = currDateString.slice(8,10);
      var month = currDateString.slice(4,8);
      var year = currDateString.slice(11,15);
      var finalDate = date+' '+month+year;

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
        this.navCtrl.push(WhatsOnCategoryListPage, {listOf: finalDate,from: 'calendar'}); 
      });
    
      loading.present();
      
    }
  }


  goDetail(name, item) {
    if (name == 'happen') {
      this.navCtrl.push(EventDetailPage, { detail: item });
    }
  }

}
