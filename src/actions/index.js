//https://www.udemy.com/react-redux/learn/v4/t/lecture/4284642?start=0
export function selectBook(book) {
  //selectBook in an ActionCreator, it needs to return an action, an object with a type property.
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
