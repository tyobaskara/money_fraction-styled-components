import { 
    GET_HEADER_TITLE,
    REMOVE_HEADER_TITLE
 } from '../actions/types';

const initialState = {
    title: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_HEADER_TITLE:
            return {
                ...state,
                title: action.payload
            };
        case REMOVE_HEADER_TITLE:
            return {
                ...initialState
            }
        default:
            return state;
    }
}

// Initial Redux Setup - step 3