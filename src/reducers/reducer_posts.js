import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      //if the state object has a key of the post id, just drop it
      //return _.reject(state, post => post === action.payload) for array-based state
      //omit is for onject based state
      return _.omit(state, action.payload);
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case FETCH_POST:
      /*
      const post = action.payload.data;
      const newState = { ...state };
      newState[post.id] = post;
      return newState;
      */
      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}
