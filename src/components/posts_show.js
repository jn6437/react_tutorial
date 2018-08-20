import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../actions";
import { Link } from "react-router-dom";

class PostsShow extends Component {
  //lifectcle: render -> componentDidMount -> Redux -> render
  //render runs first which then does not know props.post

  componentDidMount() {
    //param fetches all the wildcard parameters in the URL

    //if we already have a post, don't fetch
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
    /*
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
    */
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }
  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }
    //this.props === ownprops
    return (
      <div>
        <Link to="/"> Back To Index </Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          {" "}
          Delete Post{" "}
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

//it's not entirely uncommon to create your mapStateToProp function in a separate file
//retrieving post this way makes Less data dependency on PostsShow
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostsShow);
