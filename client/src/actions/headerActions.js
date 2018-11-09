import axios from 'axios';

import {
  GET_HEADER_TITLE,
  REMOVE_HEADER_TITLE
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

// Initial Redux Setup - step 5