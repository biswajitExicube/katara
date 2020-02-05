import { WhatsonData } from '../core/whatson_session'
import { Action } from 'redux'
import { WhatsOnAction } from '../actions/whatson_actions';

const INITIAL_STATE : WhatsonData = {
    whatsonData : null,
    loading : false,
    error : ''
}

type Payload = any;
type Error = any;

export interface ActionWithPayload<T,E> extends Action{
    payload? : T,
    error? : E
}

export function WhatsonReducer(
    state : WhatsonData = INITIAL_STATE,
    action : ActionWithPayload<Payload,Error>
) : WhatsonData{
    switch(action.type){
        case WhatsOnAction.WHATSON_FETCH :
            return{
                ...state,
                whatsonData : null,
                loading : true,
                error : ''
            }
        case WhatsOnAction.WHATSON_FETCH_SUCCESS :
            return{
                ...state,
                whatsonData : action.payload,
                loading : false,
                error : ''
            }
        case WhatsOnAction.WHATSON_FETCH_ERROR :
            return{
                ...state,
                whatsonData : null,
                loading : false,
                error : action.error
            }
    }
    return state
}