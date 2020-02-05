import { NgModule } from "@angular/core";
import { NgRedux, DevToolsExtension } from "@angular-redux/store";
import { createLogger } from 'redux-logger';
import { IAppState } from "../core/store_model";
import { RootReducer } from './reducer_module';
import { HomeActions } from "../actions/home_actions";
import { HomeEpic } from "../epics/home_epic";
import { RootEpics } from "./epic_module";
import { WhatsOnAction } from "../actions/whatson_actions";
import { WhatsonEpic } from "../epics/whatson_epic";
import { RestaurantAction } from "../actions/restaurant_action";
import { RestaurantEpic } from "../epics/restaurant_epic";

@NgModule({
    providers : [
        HomeActions,
        HomeEpic,
        RootEpics,
        WhatsOnAction,
        WhatsonEpic,
        RestaurantAction,
        RestaurantEpic
    ]
})

export class StoreModule{
    constructor(
        public store : NgRedux<IAppState>, 
        devTools : DevToolsExtension, 
        rootEpics: RootEpics){
            store.configureStore(
                RootReducer,
                {},
                [
                    createLogger(),
                    ...rootEpics.createEpics()
                ],
                devTools.isEnabled()? [devTools.enhancer()] : []
            )
        }
}