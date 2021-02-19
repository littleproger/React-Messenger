import {combineReducers} from 'redux';
import {headerReducer} from './headerReducer';
import {chatReducer} from './chatReducer';


export const mainReducer = combineReducers({
  header:headerReducer,
  chat:chatReducer
})