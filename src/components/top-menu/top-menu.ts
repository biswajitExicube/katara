import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { WhatsOnPage } from '../../pages/whats-on/whats-on';
import { RestaurantsCafesPage } from '../../pages/restaurants-cafes/restaurants-cafes';
import { CommunitiesPage } from '../../pages/communities/communities';
import { CarFinderPage } from '../../pages/car-finder/car-finder';
import { VisitingKataraPage } from '../../pages/visiting-katara/visiting-katara';
import { BeachPage } from '../../pages/beach/beach';


@Component({
  selector: 'top-menu',
  templateUrl: 'top-menu.html'
})
export class TopMenuComponent {

  text: string;

  constructor(public navCtrl : NavController, public modalCtrl : ModalController) {
    console.log('Hello TopMenuComponent Component');
    this.text = 'Hello World';
  }

  innerPage(page){
    if(page == 'whatsOn'){
      this.navCtrl.setRoot(WhatsOnPage);
    }else if(page == 'restCafe'){
      this.navCtrl.setRoot(RestaurantsCafesPage);
    }else if(page == 'communities'){
      this.navCtrl.setRoot(CommunitiesPage);
    }else if(page == 'carFind'){
      this.navCtrl.setRoot(CarFinderPage);
      // let profileModal = this.modalCtrl.create(CarFinderPage);
      // profileModal.present();
    }else if(page == 'visitKatara'){
      this.navCtrl.setRoot(VisitingKataraPage);
    }else if(page == 'beach'){
      this.navCtrl.setRoot(BeachPage);
    }
  }

}
