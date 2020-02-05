import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "../core/store_model";
import { WhatsonData } from "../core/whatson_session";

@Injectable()
export class WhatsOnAction{
    static WHATSON_FETCH = 'WHATSON_FETCH';
    static WHATSON_FETCH_SUCCESS = 'WHATSON_FETCH_SUCCESS';
    static WHATSON_FETCH_ERROR = 'WHATSON_FETCH_ERROR';

    constructor(public ngRedux: NgRedux<IAppState>){}

    whatsonFetch(lang:string){
        this.ngRedux.dispatch({
            type : WhatsOnAction.WHATSON_FETCH,
            payload : lang
        })
    }
    whatsonSuccess(payload : WhatsonData){
        this.ngRedux.dispatch({
            type : WhatsOnAction.WHATSON_FETCH_SUCCESS,
            payload : payload
        })
    }
    whatsonError(error){
        this.ngRedux.dispatch({
            type : WhatsOnAction.WHATSON_FETCH_ERROR,
            error : error
        })
    }
}