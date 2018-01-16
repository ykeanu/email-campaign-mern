import { FETCH_USER } from '../actions/types';

// Arguemnts: (1) state object with initial state (2) action object
export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
