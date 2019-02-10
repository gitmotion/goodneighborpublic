import { FETCH_SOMETHING } from '../actions/apiAction';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SOMETHING:
      console.log(action.payload);
      return [action.payload.data, ...state];
    default:
      console.log(state);
      return state;
  }
}
