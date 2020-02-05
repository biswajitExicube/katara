import { Component, Renderer2, ElementRef, ViewEncapsulation, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import * as $ from 'jquery'
import { NewsDetailsPage } from '../news-details/news-details';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
  encapsulation : ViewEncapsulation.None
})
export class NewsPage {

  @ViewChild(Slides) slides: Slides;

  public featuredNewsList : any = [];
  public findList : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private renderer: Renderer2, private elRef: ElementRef) {
    this.featuredNewsList = [
      {
        title : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`,
        image : '../assets/imgs/event-1.jpg',
        date : 'Tuesday, November 20, 2018'
      },
      {
        title : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`,
        image : '../assets/imgs/event-2.jpg',
        date : 'Tuesday, November 20, 2018'
      },
      {
        title : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`,
        image : '../assets/imgs/event-3.jpg',
        date : 'Tuesday, November 20, 2018'
      },
      {
        title : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`,
        image : '../assets/imgs/event-1.jpg',
        date : 'Tuesday, November 20, 2018'
      },
      {
        title : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`,
        image : '../assets/imgs/event-2.jpg',
        date : 'Tuesday, November 20, 2018'
      },
      {
        title : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`,
        image : '../assets/imgs/event-3.jpg',
        date : 'Tuesday, November 20, 2018'
      },
      {
        title : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`,
        image : '../assets/imgs/event-1.jpg',
        date : 'Tuesday, November 20, 2018'
      },
      {
        title : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`,
        image : '../assets/imgs/event-2.jpg',
        date : 'Tuesday, November 20, 2018'
      },
      {
        title : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`,
        image : '../assets/imgs/event-3.jpg',
        date : 'Tuesday, November 20, 2018'
      },
      {
        title : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`,
        image : '../assets/imgs/event-1.jpg',
        date : 'Tuesday, November 20, 2018'
      },
      {
        title : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`,
        image : '../assets/imgs/event-2.jpg',
        date : 'Tuesday, November 20, 2018'
      }
    ]
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  
  

  ngDoCheck(){
    if(this.findList){
      this.findSlider();
      console.log("If")
    }
  }
  findSlider(){
    if(this.featuredNewsList){
      this.findList = true;
      if(this.featuredNewsList.length > 0){
        let paginationWidth = 100/this.featuredNewsList.length.toString()+'%';   
          $(".swiper-pagination-bullet").css("width", paginationWidth);
        // console.log($(".swiper-pagination-bullet").width());
        // console.log(paginationWidth);
      }else{
      // console.log(this.featuredNewsList.length);
      }
    }else{
      this.findList = false;
      // console.log("false")
    }
  }
  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    // console.log('Current index is', currentIndex);
  }

  forDetails(news, allNews){
    this.navCtrl.setRoot(NewsDetailsPage, {details : news, allNews : allNews});
  }

}
