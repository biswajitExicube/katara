import { Injectable } from "@angular/core";
import { createEpicMiddleware } from "redux-observable";
import { HomeEpic } from "../epics/home_epic";
import { WhatsonEpic } from '../epics/whatson_epic';
import { RestaurantEpic } from "../epics/restaurant_epic";

@Injectable()
export class RootEpics{
    constructor(
        private homeEpics: HomeEpic,
        private whatsonEpic : WhatsonEpic,
        private restaurantEpic : RestaurantEpic
    ){}

    public createEpics(){
        return [
            createEpicMiddleware(this.homeEpics.home),
            createEpicMiddleware(this.whatsonEpic.whatson),
            createEpicMiddleware(this.restaurantEpic.restaurant)
        ]
    }
}