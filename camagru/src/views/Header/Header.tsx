import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import Styles from './Header.module.scss';
//import {StoreContext, ContextProps} from '../App';

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
			<div className={Styles[this.state.styleClass]} onMouseDown={this.handleClick} onMouseUp={this.handleClick}>{this.props.text}</div>
		);
	}

	handleClick() {
		if (this.state.styleClass === "auth-button")
			this.setState({styleClass: "auth-button-clicked"});
		else this.setState({styleClass: "auth-button"});
	}
}

/* function AuthorisationButton(props: AuthButtonProps) {
	return(
		<StoreContext.Consumer>
			{
				styleClass => {
					let handleClick = (event: any) => {
						if (event.target.classList.includes("auth-button")) {
							event.target.classList.remove("auth-button");
							event.target.classList.toogle("auth-button-clicked");
						}
						else {
							event.target.classList.remove("auth-button-clicked");
							event.target.classList.toogle("auth-button");
						};
					}
					return <div className={styleClass} onMouseDown={handleClick} onMouseUp={handleClick}>{props.text}</div>
				}
			}
		</StoreContext.Consumer>
	);
} */

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
			<div className={Styles.searchBar}>
				<input type="text" className={Styles.searchArea} placeholder="Who are you looking for?" onChange={this.changeHandler} />
				<button type="submit" className={Styles.searchButton}> Los geht`s!
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
				<div className={Styles.title}><NavLink to="/">CAMAGRU</NavLink></div>
				<AuthorisationButton text="Sign In"/>
				<AuthorisationButton text="Sign Up"/>
			</header>
		);
	}
}