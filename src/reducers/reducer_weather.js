import { FETCH_WEATHER } from "../actions/index";

//Make sure you always return a new instance of state when manipulting, do not make change to existing state
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //state.push manipulates state, concat creates a new list of old list + new list
      //return state.concat([action.payload.data]);
      return [action.payload.data, ...state]; // es6
  }
  console.log("action received", action);
  return state;
}
