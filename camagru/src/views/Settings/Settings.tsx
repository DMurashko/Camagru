import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Styles from './Settings.module.scss';

interface VoidState {}

interface SettProps {
	imageId: string | undefined;
}

export default function Settings () {
		return(
			<section className={Styles.settings}>This is settings!!!!</section>
		);
}