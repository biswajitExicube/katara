import { RestaurantData } from "../core/restaurant_session";
import { Action } from "redux";
import { RestaurantAction } from "../actions/restaurant_action";

const INITIAL_STATE : RestaurantData = {
    restaurantData: null,
    loading: false,
    error: ''
}

type Payload = any;
type Error = any;

export interface ActionWithPayload<T,E> extends Action{
    payload? : T,
    error? : E
}

export function RestaurantReducer(
    state: RestaurantData = INITIAL_STATE,
    action: ActionWithPayload<Payload,Error>
) : RestaurantData{
    switch(action.type){
        case RestaurantAction.RESTAURANT_FETCH :
            return{
                ...state,
                restaurantData: null,
                loading: true,
                error: ''
            }
        case RestaurantAction.RESTAURANT_FETCH_SUCCESS :
            return{
                ...state,
                restaurantData: action.payload,
                loading: false,
                error: ''
            }
        case RestaurantAction.RESTAURANT_FETCH_ERROR :
            return{
                ...state,
                restaurantData: null,
                loading: false,
                error: action.error
            }
    }
    return state;
}