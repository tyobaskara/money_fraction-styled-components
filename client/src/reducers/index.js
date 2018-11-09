import { combineReducers } from 'redux';
import headerReducer from './headerReducer';

export default combineReducers({
    header: headerReducer
});

// Initial Redux Setup - step 2