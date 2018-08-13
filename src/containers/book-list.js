import React, { Component } from "react";
//react-redux is the glue between react and redux
import { connect } from "react-redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render() {
    //console.log(this.props.asdf); // -> '123'
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

//whatever object retuned here will be available in component by this.props
//if the state changes this function will re-render
function mapStateToProps(state) {
  //whatever is returned will show up as props inside of booklist
  return {
    //asdf: "123"
    books: state.books
  };
}

//connect takes function and component and produces a container
//container is a component that is aware of the state that is contained by redux
export default connect(mapStateToProps)(BookList);
