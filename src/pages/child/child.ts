import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-child',
  templateUrl: 'child.html',
})
export class ChildPage {

  public parentData : any = [];
  public fromPage : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parentData = this.navParams.get('parentData');
    this.fromPage = this.navParams.get('fromPage');
    console.log(this.fromPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildPage');
  }

}
