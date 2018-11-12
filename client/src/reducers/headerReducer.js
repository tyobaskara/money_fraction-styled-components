import { 
    GET_HEADER_TITLE,
    REMOVE_HEADER_TITLE,
    SWITCH_THEME
 } from '../actions/types';

 import * as themes from '../style/themes';

const initialState = {
    title: '',
    theme: themes.light
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
        case SWITCH_THEME:
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }
}

// Initial Redux Setup - step 3