import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {
  public currentNews : any 
  public relatedNews : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let details = this.navParams.get('details');
    if(details){
      this.currentNews = details;

    }
    this.relatedNews = this.navParams.get('allNews');
    console.log(this.currentNews);
    console.log(this.relatedNews);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailsPage');
  }

  forDetails(news){
    console.log(news)
    this.currentNews = news
  }

}
