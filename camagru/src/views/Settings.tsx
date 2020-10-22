import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Settins.scss';

interface VoidState {}

interface SettProps {
	imageId: string | undefined;
}

export default class Settings extends Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return(
			<section id="settings">This is settings!!!!</section>
		);
	}
}