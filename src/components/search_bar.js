import React, { Component } from 'react'; 
//ES6 representation of const Component = React.Component 



//initiate searchBar class that has all method of React.Component
//class based compoment
//class SearchBar extends React.Component  to ES6 syntax
class SearchBar extends Component {

	//state us a plain javascript object that is used to record and react to user events.
	//each class-based component that we define has its own state object 
	//whenever a component's state has changed, the component immediately re-renders
	//and also forces all its children to re render as well
	//Only class based component has state, functional compoments do not have state
	constructor(props) {
		//constructor function is first and only function called automatically whenever a new instance of a class in created
		//init function
		//called every time in reality when render function in index.js is called
		super(props);
		this.state = { term: 'two'};
	}

	//Must have render method
	render() {
		//Change is react event
		//setState informs react, unlike this.state.term = ''
		//<input onChange={this.onInputChange} />;
		return ( 
		<div className = "search-bar">
			<input 
				value = {this.state.term}
				onChange= { event => this.onInputChange(event.target.value)} />
			{/* Value of the input: {this.state.term} {this.state.hi} */}
		</div>
		);
		
	}

	//deprecated
	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
}
/*
const SearchBar = () => {
	return <input />
};
*/
//STEP 3: export application so index.js can reference
export default SearchBar;