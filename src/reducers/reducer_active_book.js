//state argument is not application state, only the state this reducer is responsible for
export default function(state = null, action) {
  //same state keeps flowing into this
  //i.e if state += 1 then state will keep increment
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }

  return state;
}
