import {CHANGE_HEADER_DATA} from './actionsType';

export const changeHeaderData = (messages) =>{
    return{
        type:CHANGE_HEADER_DATA,
        payload:messages
    };
};