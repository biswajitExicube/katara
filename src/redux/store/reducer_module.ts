import { combineReducers } from 'redux'
import { HomeReducer } from '../reducer/home_reducer';
import { WhatsonReducer } from '../reducer/whatson_reducer';
import { RestaurantReducer } from '../reducer/restaurant_reducer';

export const RootReducer = combineReducers({
    homeData : HomeReducer,
    whatsonData : WhatsonReducer,
    restaurantData : RestaurantReducer
})