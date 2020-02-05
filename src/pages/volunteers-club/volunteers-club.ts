import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { UpcomingDevelopmentPage } from '../upcoming-development/upcoming-development';
import { AboutPage } from '../about/about';
import { StrategicPartnersPage } from '../strategic-partners/strategic-partners';
import { VisitingKataraPage } from '../visiting-katara/visiting-katara';


@IonicPage()
@Component({
  selector: 'page-volunteers-club',
  templateUrl: 'volunteers-club.html',
})
export class VolunteersClubPage {

  public firstName: string = '';
  public requesterEmail: string = '';
  public mobileNo: number;
  public IDNo: any;
  public birthday: any;
  public gender: string = 'select';
  public nationality: string = 'select';
  public interestArea: string = '';
  public preExperience: string = '';
  public reasonVolunteer: string = '';
  public twitterAccount: string = '';
  public facebookAccount: string = '';

  public today = new Date().toISOString();

  public firstNameError: boolean = false;
  public requesterEmailError: boolean = false;
  public emailValidateError : boolean = false;
  public mobileNoError: boolean = false;
  public mobileLengthError: boolean = false;
  public IDNoError: boolean = false;
  public birthdayError: boolean = false;

  private captchaPassed: boolean = false;
  private captchaResponse: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private zone: NgZone) {
    this.today = this.today.slice(0, 10);
    console.log(this.today);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolunteersClubPage');
  }

  back(){
    this.navCtrl.setRoot(VisitingKataraPage);
  }
  
  formSubmit() {
    console.log("click");
    let data = {
      captchaResponse: this.captchaResponse
    };
    this.http.post('http://localhost:8080/test', data).subscribe(res => {
      // console.log(res);
    });
    this.checkError();
  }

  checkError() {
    this.firstNameError = (this.firstName == '' || this.firstName == undefined) ? true : false;
    this.requesterEmailError = (this.requesterEmail == '' || this.requesterEmail == undefined) ? true : false;
    this.emailValidateError = this.requesterEmailError == false ?  true? this.ValidateEmail(): false: false;
    this.mobileNoError = (this.mobileNo == NaN || this.mobileNo == undefined) ? true : false;
    this.mobileLengthError = this.mobileNoError == false ? true ? this.mobileNo.toString().length >= 10 ? false : true : false : false;
    this.IDNoError = (this.IDNo == '' || this.IDNo == undefined) ? true : false;
    this.birthdayError = (this.birthday == '' || this.birthday == undefined) ? true : false;
    
  }
  ValidateEmail() {
    let val = this.requesterEmail;
    if(/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(val)) {
      console.log('passed');
      return (false)
    }
    console.log(this.requesterEmail);
    return (true)
  }

  captchaResolved(response: string): void {

    this.zone.run(() => {
      this.captchaPassed = true;
      this.captchaResponse = response;
    });

  }
  upcomingDev() {
    this.navCtrl.setRoot(UpcomingDevelopmentPage);
  }
  about() {
    this.navCtrl.setRoot(AboutPage);
  }
  strategicPartner() {
    this.navCtrl.setRoot(StrategicPartnersPage);
  }


}
