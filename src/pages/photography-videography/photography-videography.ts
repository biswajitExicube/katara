import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { timestamp } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-photography-videography',
  templateUrl: 'photography-videography.html',
})
export class PhotographyVideographyPage {

  public name: string = '';
  public job: string = '';
  public companyName: string = '';
  public telNo: number;
  public IDNo: number;
  public mobileNo: number;
  public email : string = ''
  public shootingType: string = 'select';
  public startShooting : any;
  public endShooting : any;
  public purposeShooting: string = 'select';
  public usesShooting: string = '';
  public shootLocation : string = 'select'
  public locationDetail: string = '';
  public escort: string = '';

  public today = new Date().toISOString();

  public nameError : boolean = false;
  public mobileNoError : boolean = false;
  public mobileLengthError : boolean = false;
  public emailError : boolean = false;
  public emailValidateError : boolean = false;
  public shootingTypeError : boolean = false;
  public startShootingError : boolean = false;
  public endShootingError : boolean = false;
  public purposeShootingError : boolean = false;

  private captchaPassed: boolean = false;
  private captchaResponse: string;

  myurl:any="";
  safeUrl:  SafeResourceUrl;
  constructor(public navCtrl: NavController, private sanitizer: DomSanitizer, private iab:InAppBrowser,
    public navParams: NavParams, public http: HttpClient, private zone: NgZone) {
    
    console.log(this.today);
    // let day = this.today.slice(8, 10);
    // let month = this.today.slice(5, 7);
    // let year = this.today.slice(0, 4);
    // this.today = day+'/'+month+'/'+year
    this.today = this.today.slice(0, 10);
    console.log(this.today);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotographyVideographyPage');
  }
  ngOnInit() {
    const browser = this.iab.create('https://katara.net/Visiting/Visitor-Photography-MobileApp','_self');
    this.myurl=browser.show();
  }
  formSubmit() {
    console.log("click");
    let data = {
      captchaResponse: this.captchaResponse
    };
    this.http.post('http://localhost:8080/test', data).subscribe(res => {
      console.log(res);
    });
    this.checkValidate();
  }

  checkValidate(){
    this.nameError = (this.name == '' || this.name == undefined)? true : false;
    this.mobileNoError = (this.mobileNo == NaN || this.mobileNo == undefined)? true : false;
    this.mobileLengthError = this.mobileNoError==false? true? this.mobileNo.toString().length >= 10? false : true : false: false;
    this.emailError = (this.email == '' || this.email == undefined)? true : false;
    this.emailValidateError = this.emailError == false? true? this.ValidateEmail() : false : false;
    this.shootingTypeError = this.shootingType == 'select' ? true : false;
    this.startShootingError = (this.startShooting == '' || this.startShooting == undefined)? true : false;
    this.endShootingError = (this.endShooting == '' || this.endShooting == undefined)? true : false;
    this.purposeShootingError = this.purposeShooting == 'select' ? true : false;
  }
  ValidateEmail() {
    let val = this.email;
    if(/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(val)) {
      console.log('passed');
      return (false)
    }
    console.log(this.email);
    return (true)
  }

  captchaResolved(response: string): void {

    this.zone.run(() => {
      this.captchaPassed = true;
      this.captchaResponse = response;
    });

  }

}
