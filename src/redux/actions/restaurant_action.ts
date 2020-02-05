import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../core/store_model';
import { RestaurantData } from '../core/restaurant_session';

@Injectable()
export class RestaurantAction{

    static RESTAURANT_FETCH = 'RESTAURANT_FETCH';
    static RESTAURANT_FETCH_SUCCESS = 'RESTAURANT_FETCH_SUCCESS';
    static RESTAURANT_FETCH_ERROR = 'RESTAURANT_FETCH_ERROR';

    constructor(public ngRedux: NgRedux<IAppState>){}

    restaurantFetch(lang:string){
        this.ngRedux.dispatch({
            type: RestaurantAction.RESTAURANT_FETCH,
            payload: lang
        })
    }
    restaurantSuccess(payload: RestaurantData){
        this.ngRedux.dispatch({
            type: RestaurantAction.RESTAURANT_FETCH_SUCCESS,
            payload : payload
        })
    }
    restaurantError(error){
        this.ngRedux.dispatch({
            type: RestaurantAction.RESTAURANT_FETCH_ERROR,
            error: error
        })
    }

}