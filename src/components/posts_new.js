import React, { Component } from "react";
//reduxForm function is very similar to connect
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";
class PostsNew extends Component {
  renderField(field) {
    //destructuring
    const {
      meta: { touched, error }
    } = field;
    /*
    const className = `form-group ${
      field.meta.touched && field.meta.error ? "has-danger" : ""
    }`;*/
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label> {field.labelToShow} </label>
        {/*still responsible for making sure Field is responsible for this input
        https://stackoverflow.com/questions/31048953/what-do-these-three-dots-in-react-do
        dynamically inherit input property i.e a={this.props.a}*/}
        <input className="form-control" type="text" {...field.input} />
        {/* ternary expression -> expression ? if true : if false
        check if the user has touched this input*/}
        <div classNmae="text-help">
          {touched ? error : ""}
          {/*meta.touched ? meta.error : ""*/}
          {/*field.meta.touched ? field.meta.error : ""*/}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    // this === component
    console.log(values);
    this.props.createPost(values);
  }
  render() {
    //pull handleSubmit from redux submit, accessible by props as reduxForm connect function allows this function
    //handleSubmit is going to run redux form side of things(i.e validate) and once its okay to be passed on,
    //onsubmit function is called
    const { handleSubmit } = this.props;

    /*using bind because we are calling onsubmit as a callback function that will be executed in some different context outside of our component*/
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {/*component is used to display field property
        field does not know what type(text, checkbox) to display, so component handles it
        not adding parenthesies at the end because we are passing reference to a function
        
        2. Name connects validate and renderfield function together*/}
        <Field labelToShow="Title" name="title" component={this.renderField} />
        <Field
          labelToShow="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          labelToShow="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-dange">
          submit
        </Link>
      </form>
    );
  }
}
function validate(values) {
  //console.log(values) -> {titie: 'as', categories: 'as', content: 'as'}
  const errors = {};

  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title with 3 or more characters";
  }
  if (!values.categories) {
    errors.categories = "Enter a category";
  }
  if (!values.content) {
    errors.content = "Enter a content";
  }
  //{} means no error
  return errors;
}

//form: name of the form
/*
export default reduxForm({ validate: validate, form: "PostsNewForm" })(
  PostsNew
);
*/
export default reduxForm({ validate: validate, form: "PostsNewForm" })(
  connect(
    null,
    { createPost }
  )(PostsNew)
);

/*
//postEdit.js
export default reduxForm({form: 'PostsNewForm'})(PostsEdit);
//if we have this, two forms will merge into one, not desireable so make the form property unique
*/
