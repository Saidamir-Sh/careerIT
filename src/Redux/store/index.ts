import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from '../reducer';
import { State } from './Interfaces';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState: State = {
    jobs: [],
    isLoading: true,
    savedJobs: [],
}

export const configureStore = createStore(
    rootReducer, 
    initialState, 
    composeEnhancers(applyMiddleware(thunk))
)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof configureStore.getState>
export type AppDispatch = typeof configureStore.dispatch
