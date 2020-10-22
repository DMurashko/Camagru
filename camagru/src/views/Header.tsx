import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Header.scss';

interface VoidProps {}

interface AuthButtonProps {
	text: string;
}

interface AuthButtonState {
	styleClass: string;
}

class AuthorisationButton extends Component<AuthButtonProps, AuthButtonState> {
	constructor(props: any) {
		super(props);

		this.state = {
			styleClass: "auth-button"
		};

		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return(
			<div className={this.state.styleClass} onMouseDown={this.handleClick} onMouseUp={this.handleClick}>{this.props.text}</div>
		);
	}

	handleClick() {
		if (this.state.styleClass === "auth-button")
			this.setState({styleClass: "auth-button-clicked"});
		else this.setState({styleClass: "auth-button"});
	}
}

interface SearchState {
	currentInput: string | undefined;
}

class SearchBar extends Component<VoidProps, SearchState> {
	constructor(props: any) {
		super(props);

		this.state = {
			currentInput: ""
		};

		this.changeHandler = this.changeHandler.bind(this);
	}
	
	render() {
		return(
			<div className="searchBar">
				<input type="text" className="searchArea" placeholder="Who are you looking for?" onChange={this.changeHandler} />
				<button type="submit" className="searchButton"> Los geht`s!
				</button>
			</div>
		);
	}

	changeHandler(event: any) {
		let currentInput = event.target.value;
		this.setState({currentInput: currentInput});
	}
}

export default class Header extends Component {
	constructor(props: any) {
		super(props);

	}

	render() {
		return (
			<header>
				<SearchBar />
				<div className="title">CAMAGRU</div>
				<AuthorisationButton text="Sign In"/>
				<AuthorisationButton text="Sign Up"/>
			</header>
		);
	}
}