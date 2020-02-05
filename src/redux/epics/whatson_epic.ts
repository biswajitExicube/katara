import { Injectable } from "@angular/core";
import { WhatsOnAction } from "../actions/whatson_actions";
import { ActionsObservable } from 'redux-observable';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class WhatsonEpic{
    constructor(public whatsonAction: WhatsOnAction, public http : HttpClient){}

    whatson = (action$ : ActionsObservable<any>) => {
        return action$.ofType(WhatsOnAction.WHATSON_FETCH)
        .mergeMap(({payload}) => {
            return new Observable(() => {
                console.log(payload);
            })
        })
    }
}