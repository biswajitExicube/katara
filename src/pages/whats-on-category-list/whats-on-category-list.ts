import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventDetailPage } from '../event-detail/event-detail';

/**
 * Generated class for the WhatsOnCategoryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-whats-on-category-list',
  templateUrl: 'whats-on-category-list.html',
})
export class WhatsOnCategoryListPage {

  public catList: any;
  public calenderList : any;
  public happenArr: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.catList = this.navParams.get('listOf');
    this.calenderList = this.navParams.get('from');
    console.log(this.catList);
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
        location: 'Building 41'
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
        location: 'Building 41'
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
        location: 'Building 41'
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhatsOnCategoryListPage');
  }
  goDetail(item) {
    this.navCtrl.push(EventDetailPage, { detail: item });
  }

}
