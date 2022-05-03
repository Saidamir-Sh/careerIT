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
        case ActionType.ADD_TO_SAVED : {
            return {
                ...state,
                savedJobs: [...state.savedJobs, action.payload],
                saved: !state.saved,
            }
        }
        case ActionType.REMOVE_FROM_SAVED : {
            return {
                ...state,
                savedJobs: state.savedJobs?.filter((job) => job._id !== action.payload._id),
                saved: !state.saved,
            }
        }
        default: 
            return state;
    }
}
export type RootState = ReturnType<typeof rootReducer>;