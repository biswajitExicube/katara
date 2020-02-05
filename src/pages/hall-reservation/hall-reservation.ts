import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { VisitingKataraPage } from '../visiting-katara/visiting-katara';


@IonicPage()
@Component({
  selector: 'page-hall-reservation',
  templateUrl: 'hall-reservation.html',
})
export class HallReservationPage {

  public changeDir : boolean = false;

  public requesterName: string = '';
  public requesterEmail: string = '';
  public requesterMobileNo: number;
  public requestStartDate: any;
  public requestEndDate: any;
  public location: string = 'select';
  public reasonRequest: string = '';

  public today = new Date().toISOString();

  public requesterNameError : boolean = false;
  public requesterMobileNoError : boolean = false;
  public requesterMobileNoLengthError : boolean = false;
  public requestStartDateError : boolean = false;
  public requestEndDateError : boolean = false;
  public reasonRequestError : boolean = false;
  public locationError : boolean = false;

  private captchaPassed: boolean = false;
  private captchaResponse: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http: HttpClient, private zone: NgZone, private events : Events) {

    let localLang = localStorage.getItem('direction');
    if(localLang == 'right'){
      this.changeDir = true;
    }else if(localLang == 'left'){
      this.changeDir = false
    }else{
      this.changeDir = false
    }

    this.today = this.today.slice(0, 10);
    console.log(this.today);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HallReservationPage');
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

  back(){
    this.navCtrl.setRoot(VisitingKataraPage);
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
    this.requesterNameError = (this.requesterName == '' || this.requesterName == undefined)? true : false;
    this.requesterMobileNoError = (this.requesterMobileNo == NaN || this.requesterMobileNo == undefined)? true : false;
    this.requesterMobileNoLengthError = this.requesterMobileNoError == false? true? this.requesterMobileNo.toString().length >= 10? false : true : false : false;
    this.requestStartDateError = (this.requestStartDate == '' || this.requestStartDate == undefined)? true : false;
    this.requestEndDateError = (this.requestEndDate == '' || this.requestEndDate == undefined)? true : false;
    this.reasonRequestError = (this.reasonRequest == '' || this.reasonRequest == undefined)? true : false;
    this.locationError = this.location == 'select' ? true : false;
  }

  captchaResolved(response: string): void {

    this.zone.run(() => {
      this.captchaPassed = true;
      this.captchaResponse = response;
    });

  }

}
