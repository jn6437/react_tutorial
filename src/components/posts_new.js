import React, { Component } from "react";
//reduxForm function is very similar to connect
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label> {field.labelToShow} </label>
        {/*still responsible for making sure Field is responsible for this input
        https://stackoverflow.com/questions/31048953/what-do-these-three-dots-in-react-do
        dynamically inherit input property i.e a={this.props.a}*/}
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        {/*component is used to display field property
        field does not know what type(text, checkbox) to display, so component handles it
        not adding parenthesies at the end because we are passing reference to a function*/}
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
      </form>
    );
  }
}
function valiadte() {}
//form: name of the form
export default reduxForm({ validate: validate, form: "PostsNewForm" })(
  PostsNew
);

/*
//postEdit.js
export default reduxForm({form: 'PostsNewForm'})(PostsEdit);
//if we have this, two forms will merge into one, not desireable so make the form property unique
*/
