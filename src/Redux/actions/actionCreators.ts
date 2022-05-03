import { Dispatch } from "react";
import { State } from "../store/Interfaces";
import { ActionType, Action } from "./actionTypes";

export const URL: string =  'https://strive-jobs-api.herokuapp.com/jobs?'

export const fetchJobs = (url: string) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            let response = await fetch(`${url}limit=10&skip=10`)
            if(response.ok) {
                let data = await response.json()
                dispatch({
                    type: ActionType.FETCH_JOBS,
                    payload: data.data
                })
            }
        } catch (error) {
            console.log('Error occured in fetchJobs action, Error : ' + error)
        }
    }
}
export const fetchSearched = (url: string, query: string) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            let response = await fetch(`${url}search=${query}&limit=20`)
            if(response.ok) {
                let data = await response.json()
                dispatch({
                    type: ActionType.FETCH_SEARCHED_JOBS,
                    payload: data.data
                })
            }
        } catch (error) {
            console.log('Error occured in fetchSearched action, Error : ' + error)
        }
    }
}
export const fetchByCategory = (url: string, category: {label: string} | null = {label : 'developer'}) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            let response = await fetch(`${url}category=${category?.label}&limit=20`)
            if(response.ok) {
                let data = await response.json()
                dispatch({
                    type: ActionType.FETCH_BY_CATEGORY,
                    payload: data.data
                })
            }
        } catch (error) {
            console.log('Error occured in fetchByCategory action, Error : ' + error)
        }
    }
}
// Add station to saved component
export const saveJob = (job: State) => ({
    type: ActionType.ADD_TO_SAVED,
    payload: job,
  })

// remmoving item from saved component
export const removeJob = (job: State) => ({
    type: ActionType.REMOVE_FROM_SAVED,
    payload: job
})
