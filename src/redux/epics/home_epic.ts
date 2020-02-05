import { Injectable } from "@angular/core";
import { HomeActions } from "../actions/home_actions";
import { ActionsObservable } from 'redux-observable'
import { Observable } from "rxjs";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from "@angular/common/http";



@Injectable()
export class HomeEpic{
    constructor(public homeAction : HomeActions, public http: HttpClient){}

    home = (action$ : ActionsObservable<any>) => {
        return action$.ofType(HomeActions.HOME_FETCH)
        .mergeMap(({payload}) => {
            return new Observable(() => {
                console.log(payload);
                // this.http.get('assets/data/data.json').subscribe((data: any) => {
                //     if(data){
                //         console.log(data);
                //         this.homeAction.homeDataSuccess(data.allData.eventData);
                //     }
                // })                
            })
        })
    }
}