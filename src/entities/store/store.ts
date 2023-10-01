import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import {authReducer} from './reducers/authReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk))

type AppAction = ReturnType<typeof store.dispatch>
export type AppDispatch = ThunkDispatch<AppStateType, any, AppAction>

//@ts-ignore
window.store = store