import { Component, ViewChild } from '@angular/core';
import { Nav, App, Platform, MenuController, ModalController, AlertController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../pages/home/home';
import { WhatsOnPage } from '../pages/whats-on/whats-on';
import { RestaurantsCafesPage } from '../pages/restaurants-cafes/restaurants-cafes';
import { CommunitiesPage } from '../pages/communities/communities';
import { CarFinderPage } from '../pages/car-finder/car-finder';
import { BeachPage } from '../pages/beach/beach';
import { AboutPage } from '../pages/about/about';
import { NewsPage } from '../pages/news/news';
import { VisitingKataraPage } from '../pages/visiting-katara/visiting-katara';
import { PreferencesPage } from '../pages/preferences/preferences';
import { FaqPage } from '../pages/faq/faq';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  public currentLang: boolean = true;
  public changeDir : boolean = false;

  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public translate: TranslateService,
    public splashScreen: SplashScreen, public menuCtrl: MenuController, public modalCtrl: ModalController,
    public alertCtrl: AlertController, public events: Events, public app: App) {
      console.log("window Screen width " + window.screen.width);
      console.log("window Screen height " + window.screen.height);
      console.log("window Pixel Ratio " + window.devicePixelRatio);
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage, icon: 'home' },
      { title: "What's On", component: WhatsOnPage, icon: 'home' },
      { title: 'Restaurants & Cafes', component: RestaurantsCafesPage, icon: 'home' },
      { title: 'Communities', component: CommunitiesPage, icon: 'home' },
      // { title: 'Getting Around', component: HomePage, icon: 'home' },
      { title: 'Near By', component: HomePage, icon: 'home' },
      { title: 'Car Finder', component: CarFinderPage, icon: 'home' },
      { title: 'Beach', component: BeachPage, icon: 'home' },
      { title: 'Visiting Katara', component: VisitingKataraPage, icon: 'home' },
      { title: 'News', component: NewsPage, icon: 'home' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString('#ffffff');
      }
      this.platform.registerBackButtonAction(() => {
       if(this.nav.canGoBack()){
         this.nav.pop();
       }      
      });

      this.events.subscribe('direction', (currentLang) => {
        // user and time are the same arguments passed in `events.publish(user, time)`;
        if(currentLang == false){
          this.changeDir = true;
        }else if(currentLang == true){
          this.changeDir = false
        }else{
          this.changeDir = false
        }        
      });

      let localLang = localStorage.getItem('direction');
      if(localLang == 'left'){
        this.translate.setDefaultLang('en');
        this.currentLang = true;
        this.changeDir = false;
      }else if(localLang == 'right'){
        this.translate.setDefaultLang('ar');
        this.currentLang = false;
        this.changeDir = true;
      }else{
        this.translate.setDefaultLang('en');
        this.currentLang = true;
        this.changeDir = false;
      }
    });
  }
  goHome() {
    this.nav.setRoot(HomePage);
    this.menuCtrl.close();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
  }
  aboutPage() {
    this.nav.setRoot(AboutPage);
  }
  preferences() {
    this.nav.setRoot(PreferencesPage);
  }
  faqPage() {
    this.nav.setRoot(FaqPage);
  }
  changeLang() {
    this.currentLang = !this.currentLang;
    if (this.currentLang) {
      
      const confirm = this.alertCtrl.create({
        message: 'هل أنت متأكد من أنك تريد حفظ التغييرات في التفضيلات؟',
        cssClass: 'changeDir',
        buttons: [
          {
            text: 'إلغاء',
            handler: () => {
              console.log('Disagree clicked');
              this.currentLang = false;
            }
          },
          {
            text: 'حسنا',
            handler: () => {
              console.log('Agree clicked');
              this.translate.use('en');
              localStorage.setItem('direction', 'left');
              this.events.publish('direction', this.currentLang);
            }
          }
        ]
      });
      confirm.present();
    } else {
      
      const confirm = this.alertCtrl.create({
        message: 'Are you sure you want to save the changes in preferences?',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              console.log('Disagree clicked');
              this.currentLang = true;
            }
          },
          {
            text: 'OK',
            handler: () => {
              console.log('Agree clicked');
              this.translate.use('ar');
              localStorage.setItem('direction', 'right');
              this.events.publish('direction', this.currentLang);
            }
          }
        ]
      });
      confirm.present();
    }
    console.log(this.currentLang);
  }
}
