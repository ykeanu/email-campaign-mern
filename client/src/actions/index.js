import axios from 'axios';
import { FETCH_USER } from './types';

// Redux thunk will assess to see if we return a function
const fetchUser = () => {
  return function(dispatch) {
    axios.get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
};
