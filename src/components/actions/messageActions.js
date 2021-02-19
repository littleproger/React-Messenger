import {ADD_NEW_MESSAGE, FETCHED_MESSAGES, DELETE_MESSAGE, SHOW_EDIT, EDIT_MESSAGE, HIDE_EDIT} from './actionsType';

export const addMessage = (data) =>{
    return{
        type:ADD_NEW_MESSAGE,
        payload:data
    };
};
export const deleteMessage = (id) =>{
    return{
        type:DELETE_MESSAGE,
        payload:id
    };
};
export const addFetchedMessage = (data) =>{
    return{
        type:FETCHED_MESSAGES,
        payload:data
    };
};
export const showEdit = (id = null) =>{
    return{
        type:SHOW_EDIT,
        payload:id
    };
}
export const editMessage = (data) =>{
    return{
        type:EDIT_MESSAGE,
        payload:data
    };
}
export const hideEdit = () =>{
    return{
        type:HIDE_EDIT
    };
}