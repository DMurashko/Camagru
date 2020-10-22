import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Main.scss';

interface VoidState {}

interface ImageProps {
	imageId: string | undefined;
}

class UserInfo extends Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<div className="user-info">
				<div className="user-logo">Here will be displayed user logo!</div>
				<div className="usr-name-container">
					<div>@username</div>
					<div>n Beiträge</div>
				</div>
			</div>
		);
	}
}

class Image extends Component<ImageProps, VoidState> {
	constructor(props: ImageProps) {
		super(props);
	}

	render() {
		//const path = '../images/' + this.props.imageId + '.jpg';
		return(
			<img src={this.props.imageId} alt="A mountain"/>
		);
	}
}

class UserGallery extends Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<article className="user-gallery">
				<Image imageId = "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=rohit-tandon-9wg5jCEPBsw-unsplash.jpg" />
				<Image imageId = "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jeremy-thomas-E0AHdsENmDg-unsplash.jpg" />
				<Image imageId = "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=john-towner-JgOeRuGD_Y4-unsplash.jpg" />
				<Image imageId = "https://images.unsplash.com/photo-1513005103849-75a5a0f7c043?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=laurent-perren-rkNLoQ0QOPY-unsplash.jpg" />
				<Image imageId = "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=mark-koch-KiRlN3jjVNU-unsplash.jpg" />
				<Image imageId = "https://images.unsplash.com/photo-1500877015165-e1fb7f2db007?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=nathan-anderson-NAV4nIjgwPk-unsplash.jpg" />
				<Image imageId = "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=simon-fitall-tvleqH3p1os-unsplash.jpg" />
				<Image imageId = "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=rohit-tandon-9wg5jCEPBsw-unsplash.jpg" />
			</article>
		);
	}
}

export default class Main extends Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<main>
				<UserInfo />
				<UserGallery />
			</main>
		);
	}
}