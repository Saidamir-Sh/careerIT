import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const initialState = {
    jobs: ,
    isLoading: ,
    savedJobs: ,
    companyDetails: 
}

const configureStore = createStore(
    rootReducer, 
    initialState, 
    composeEnhancers(applyMiddleware(thunk))
)