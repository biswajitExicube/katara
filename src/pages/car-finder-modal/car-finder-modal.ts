import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-car-finder-modal',
  templateUrl: 'car-finder-modal.html',
})
export class CarFinderModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarFinderModalPage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }
  saveComment(){
    this.viewCtrl.dismiss();
  }

}
