import axios from 'axios';
import { FETCH_USER } from './types';

// Redux thunk will assess to see if we return a function
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  // only interested in respones object
  dispatch({ type: FETCH_USER, payload: res.data });
};
