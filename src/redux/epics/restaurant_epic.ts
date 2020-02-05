import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RestaurantAction } from "../actions/restaurant_action";
import { ActionsObservable } from "redux-observable";
import { Observable } from "rxjs";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantEpic{
    constructor(public http: HttpClient, public restaurantAction: RestaurantAction){}

    restaurant = (action$ : ActionsObservable<any>) => {
        return action$.ofType(RestaurantAction.RESTAURANT_FETCH)
        .mergeMap(({payload}) => {
            return new Observable(() => {
                console.log(payload)
            })
        })
    }
}