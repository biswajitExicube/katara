import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController } from 'ionic-angular';
import { ChildPage } from '../child/child';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { RestaurantData } from '../../redux/core/restaurant_session';
import { RestaurantAction } from '../../redux/actions/restaurant_action';


@IonicPage()
@Component({
  selector: 'page-restaurants-cafes',
  templateUrl: 'restaurants-cafes.html',
})
export class RestaurantsCafesPage {

  @select(['restaurantData', 'restaurantData'])
  readonly restaurantData$ : Observable<RestaurantData>;

  public changeDir : boolean = false;
  public restaurantList : any = [];
  public currLang : string;


  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController, 
    public navParams: NavParams, 
    private events : Events,
    public restaurantAction: RestaurantAction
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

    this.restaurantAction.restaurantFetch(this.currLang);
    this.restaurantData$.subscribe((data) => {
      if(data){
        console.log(data);
      }
    })

    

    this.restaurantList = [
      {
        name : 'Ard Canaan',
        description : `Ard Canaan Restaurent is a unique authentic restaurant represent the traditional Holy Land Cusine. Ard Canaan term leads to the cradle of...`,
        image : '../assets/imgs/event-1.jpg',
        logo : '../assets/imgs/event-1.jpg'
      },
      {
        name : 'Al Jazeera Media Cafe',
        description : `Ard Canaan Restaurent is a unique authentic restaurant represent the traditional Holy Land Cusine. Ard Canaan term leads to the cradle of...`,
        image : '../assets/imgs/event-2.jpg',
        logo : '../assets/imgs/event-2.jpg'
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
    console.log('ionViewDidLoad RestaurantsCafesPage');
    
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
   
  }
  forDetails(restaurant){
    console.log(restaurant);
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
      this.navCtrl.push(ChildPage, {parentData: restaurant});
    });
  
    loading.present();
    
  }
  

}
