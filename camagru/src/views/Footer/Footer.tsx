import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Styles from'./Footer.module.scss';

interface VoidProps {}

interface UIState {
	iconSource: string | undefined;
	username: string | undefined;
	isAuthorised: boolean;
}

function UserIcon () {
	/*this.state = {
		iconSource: undefined,
		username: undefined,
		isAuthorised: false
	};*/
	//if (!this.state.isAuthorised)
	return(
		<div className={Styles.userIcon}>User is not identified! <br/> Please log in or register!</div>
	);
}

export default function Footer () {
	return (
		<footer>
			<UserIcon />
			<div className={Styles.camButtonContainer}>
				<button type="submit" className={Styles.cameraButton}> Click to make a photo!</button>
			</div>
			<div className={Styles.settingsIcon}><NavLink to='/settings'>Settings</NavLink></div>
		</footer>
	);
}