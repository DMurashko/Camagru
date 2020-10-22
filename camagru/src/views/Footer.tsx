import React, { Component } from 'react';
import ReactDOM, {unmountComponentAtNode} from 'react-dom';
import './Footer.scss';

interface VoidProps {}

interface UIState {
	iconSource: string | undefined;
	username: string | undefined;
	isAuthorised: boolean;
}

class UserIcon extends Component<VoidProps, UIState> {
	constructor(props: any) {
		super(props);

		this.state = {
			iconSource: undefined,
			username: undefined,
			isAuthorised: false
		};
	}
	render() {
		if (!this.state.isAuthorised)
			return(
				<div className="user-icon">User is not identified! <br/> Please log in or register!</div>
			);
	}
}

export default class Footer extends Component {
	constructor(props: any) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return (
			<footer>
				<UserIcon />
				<div className="camButtonContainer">
					<button type="submit" className="cameraButton"> Click to make a photo!</button>
				</div>
				<div className="settings-icon" onClick={this.handleClick}>Settings</div>
			</footer>
		);
	}

	handleClick() {
		const mainDiv = document.querySelector('main');
		if (!mainDiv) {
			throw new Error("The element main wasn't found");
		}

		unmountComponentAtNode(mainDiv);
	}
}