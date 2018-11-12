import axios from 'axios';

import {
  GET_HEADER_TITLE,
  REMOVE_HEADER_TITLE,
  SWITCH_THEME
} from './types';

// Get Header Title
export const setHeaderTitle = payload => dispatch => {
  dispatch({
    type: GET_HEADER_TITLE,
    payload
  });
};

// Remove Header Title
export const removeHeaderTitle = () => dispatch => {
  dispatch({
    type: REMOVE_HEADER_TITLE
  });
};

// Switch Theme
export const switchTheme = payload => dispatch => {
  dispatch({
    type: SWITCH_THEME,
    payload
  });
};

// Initial Redux Setup - step 5