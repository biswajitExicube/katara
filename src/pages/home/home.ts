import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, Events, Slides, IonicPage } from 'ionic-angular';
import { EventDetailPage } from '../event-detail/event-detail';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { HomeData } from '../../redux/core/home_session';
import { HomeActions } from '../../redux/actions/home_actions';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('eventSlider') eventSlider: Slides;

  @select(['homeData', 'homeData'])
  readonly homeData$ : Observable<HomeData>;

  public eventData : any = [];

  public changeDir : boolean = false;
  public currLang : string;

  constructor(
    public navCtrl: NavController, 
    private platform : Platform, 
    private events : Events,
    public homeAction: HomeActions
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

    this.homeAction.homeDataFetch(this.currLang);
    this.homeData$.subscribe((data:any) => {
      if(data){
        console.log(data);
      }
    })

    this.eventData = [
      {
        startDate : '3 December, 2019',
        endDate : '17 December, 2019',
        startTime : '11:30 AM',
        endTime : '12:30 AM',
        name : 'Katara 9th Traditional Dhow Festival',
        location : 'Beach 15',
        desc: 'Traditions Preserved and Renewed.',
        image : '../assets/imgs/event-1.jpg',
        status : 'Free',
        type : 'Festival'
      },
      {
        startDate : '30 November, 2019',
        endDate : '30 November, 2019',
        startTime : '12:30 PM',
        endTime : '4:30 PM',
        name : 'Katara Award For Inventors',
        location : 'Building 18',
        desc: 'The Katara Award for Inventors is meant to encourage creators to hone their talents and skills.',
        image : '../assets/imgs/event-2.jpg',
        status : 'Register',
        type : 'Compititions'
      }
    ]
  }

  ionViewWillEnter(){
    
  }


  forDetail(event){
    console.log(event);
    this.navCtrl.push(EventDetailPage, {detail : event});
  }

}
