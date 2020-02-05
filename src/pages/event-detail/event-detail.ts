import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {

  public detailData : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detailData = this.navParams.get('detail');
    console.log(this.detailData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
  }
  status(){
    if(this.detailData.status == "register"){
      alert("Registration form to be open from Katara website");
    }
    else{
      console.log("Its Free");
    }
  }

}
