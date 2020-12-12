import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddPost from './AddPost';
import Styles from './Main.module.scss';
import UserGallery from './UserGallery';

const imagesStorage = [
	"https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=rohit-tandon-9wg5jCEPBsw-unsplash.jpg",
	"https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jeremy-thomas-E0AHdsENmDg-unsplash.jpg",
	"https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=john-towner-JgOeRuGD_Y4-unsplash.jpg",
	"https://images.unsplash.com/photo-1513005103849-75a5a0f7c043?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=laurent-perren-rkNLoQ0QOPY-unsplash.jpg",
	"https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=mark-koch-KiRlN3jjVNU-unsplash.jpg",
	"https://images.unsplash.com/photo-1500877015165-e1fb7f2db007?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=nathan-anderson-NAV4nIjgwPk-unsplash.jpg",
	"https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=simon-fitall-tvleqH3p1os-unsplash.jpg",
	"https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=rohit-tandon-9wg5jCEPBsw-unsplash.jpg"
];

//let images = imagesStorage.map((item, index) => <Image imageId={item} key={index.toString()} />);

function UserInfo () {
	return (
		<div className={Styles.userInfo}>
			<div className={Styles.userLogo}>Here will be displayed user logo!</div>
			<div className={Styles.userNameContainer}>
				<div>@username</div>
				<div>n Beiträge</div>
			</div>
		</div>
	);
}

export default function Main () {
	return (
		<main>
			<AddPost />
			<UserInfo />
			<UserGallery />
		</main>
	);
}