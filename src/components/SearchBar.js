import React, { Component } from 'react';

export class SearchBar extends Component {
	// All JS classes have a constructor funciton that is
	// called automatically when a new object is made from the class
	constructor(props){
		// super(props) just calls the parent constructor 
		super(props)
		// ...and then we add state to the object we are making.  
		this.state = {term: ""}
		
	}

	render() {
		return (
			<div className="search-bar col-lg-12">
				<input 
					type="text" 
					onChange={this.handleInputChange.bind(this)}
					
				/>
			</div>
		)
	}

	handleInputChange(event){
		console.log(this)
		this.setState({term: event.target.value})
		console.log(event.target.value)
		this.props.onSearchTermChange(event.target.value)
	}

}



