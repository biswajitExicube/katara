import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, Events, ModalController } from 'ionic-angular';
import { CarFinderModalPage } from '../car-finder-modal/car-finder-modal';


@IonicPage()
@Component({
  selector: 'page-car-finder',
  templateUrl: 'car-finder.html',
})
export class CarFinderPage {

  public changeDir : boolean = false;
  public isSavePark : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public viewCtrl : ViewController, public loadingCtrl: LoadingController, private events : Events) {

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
    console.log('ionViewDidLoad CarFinderPage');
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

  // closeModal(){
  //   this.viewCtrl.dismiss();
  // }

  // savePark(){
  //   this.isSavePark = !this.isSavePark;
  //   console.log("Click");
  // }
  // parkMsgDelete(){
  //   this.isSavePark = false;
  // }
  // parkMsgSave(){
  //   let loading = this.loadingCtrl.create({
  //     content: 'Detecting your location...'
  //   });
  
  //   loading.present();
  //   setTimeout(() => {
  //     loading.dismiss();
  //   }, 3000);
  // }
  // returnCar(){}

  parkMyCar(){
    let profileModal = this.modalCtrl.create(CarFinderModalPage);
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }
  returnMyCar(){
    console.log("Return")
  }


}
