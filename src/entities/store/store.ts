import {combineReducers, createStore} from "redux";
// import thunk from 'redux-thunk';
import {authReducer} from './reducers/authReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);

//@ts-ignore
window.store = store