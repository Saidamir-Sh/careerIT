import { Action, ActionType } from "../actions/actionTypes"
import { initialState } from "../store"
import { State } from "../store/Interfaces"

export const rootReducer =  (state = initialState, action: Action): State => {
    switch(action.type) {
        case ActionType.FETCH_JOBS : {
            return {
                ...state,
                jobs: action.payload,
                isLoading: false
            }
        }
        case ActionType.FETCH_SEARCHED_JOBS : {
            return {
                ...state,
                jobs: action.payload,
                isLoading: false
            }
        }
        case ActionType.FETCH_BY_CATEGORY : {
            return {
                ...state,
                jobs: action.payload,
                isLoading: false
            }
        }
        default: 
            return state;
    }
}
