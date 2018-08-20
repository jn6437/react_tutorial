//npm install --save lodash
import _ from "lodash";

import React, { Component } from "react";
//React knows how to work with react components
//To render componet to DOM, use reactDOM
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import VideoDetail from "./components/video_detail.js";
import SearchBar from "./components/search_bar.js";
import VideoList from "./components/video_list";

//npm install --save youtube-api-search
import { API_KEY } from "./API_KEY";

/*
//STEP 1: create a new component that produces some HTML
//const is ES6 syntax, const is like var, but cannot be changed
//Fat Arrow is a syntax to declare function, like function but difference is {insert reason about 'this'}
const App = () => {
	//HTML is called jsx, a subset of javascript that allows to write HTML-like component. jsx exists so that it can eventually produce HTML
	//jsx, like es6, cannot be interpreted by a browser; a boilderplate package like webpack and/or babel is to translate this jsx into javascript that can be interpreted by a browser
	return (
	<div> 
		<SearchBar />
	</div>
	);
}
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("따효니");
  }

  videoSearch(term) {
    //YTSearch({ key: API_KEY, term: 'surfboards'}, (data) => {this.setState({ videos: data })}); to ES6
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videosearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videosearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

//STEP 2: Take this component's generated HTML and put it on the page
//ReactDOM.render(App); <- this sends out class, not class instance
//pass instance of app and select div id 'container' to define destination
ReactDOM.render(<App />, document.querySelector(".container"));
