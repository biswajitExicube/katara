import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html',
})
export class PreferencesPage {

  public getNotified : boolean;
  public insideNotified : boolean;

  public notifiedList : any = [];
  
  public festivalCheckbox : boolean = false;
  public exhibitionCheckbox : boolean = false;
  public workshopCheckbox : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.notifiedList = [
      {
        name : 'Festivals',
        icon : 'star',
        notifyFor : 'festival',
        checked : 'true'
      },
      {
        name : 'Exibitions',
        icon : 'star',
        notifyFor : 'exihibition',
        checked : 'true'
      },
      {
        name : 'WorkShops',
        icon : 'star',
        notifyFor : 'workshop',
        checked : 'true'
      },
      {
        name : 'Music',
        icon : 'star',
        notifyFor : 'music',
        checked : 'false'
      },
      {
        name : 'LivePerformence',
        icon : 'star',
        notifyFor : 'livePerformence',
        checked : 'true'
      },
      {
        name : 'Lectures',
        icon : 'star',
        notifyFor : 'lecture',
        checked : 'true'
      },
      {
        name : 'Courses',
        icon : 'star',
        notifyFor : 'course',
        checked : 'true'
      },
      {
        name : 'Activities',
        icon : 'star',
        notifyFor : 'activity',
        checked : 'true'
      },
      {
        name : 'Films',
        icon : 'star',
        notifyFor : 'film',
        checked : 'true'
      },
      {
        name : 'Competitions',
        icon : 'star',
        notifyFor : 'competition',
        checked : 'true'
      },
      {
        name : 'Cultural',
        icon : 'star',
        notifyFor : 'cultural',
        checked : 'true'
      },
      {
        name : 'Photography',
        icon : 'star',
        notifyFor : 'photography',
        checked : 'true'
      },
      {
        name : 'Planetarium',
        icon : 'star',
        notifyFor : 'planetarium',
        checked : 'true'
      },
      {
        name : 'Programs',
        icon : 'star',
        notifyFor : 'program',
        checked : 'true'
      }
    ]
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferencesPage');
    for(let i=0; i<this.notifiedList.length; i++){
      if(this.notifiedList[i].checked == 'true'){
        this.getNotified = true;
        this.insideNotified = true;
      }
      console.log(this.getNotified);
    }
  }

  getNotification(){
    if(this.getNotified == true){
      this.getNotified = false;
    }else{
      this.getNotified = true;
    }
    console.log(this.getNotified);
  }
  insideNotification(){
    if(this.insideNotified == true){
      this.insideNotified = false;
    }else{
      this.insideNotified = true;
    }
    console.log(this.insideNotified);
  }

  updateCheckbox(name){
    console.log(name);
  }
  notifyApply(){
    console.log('Apply')
  }

}
