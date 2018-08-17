import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";
import _ from "lodash";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    //cannot use this.props.posts.map on object
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          {/*Link tag is <a> tag, but it prevents from <a>'s normal behaviour*/}
          <Link className="btn btn-primary" to="/posts/new">
            Add a post
          </Link>
        </div>

        <h3>posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}
export default connect(
  mapStateToProps,
  { fetchPosts } //{ fetchPosts: fetchPosts}
)(PostsIndex);
