import React from 'react';
import {connect} from 'react-redux';
import Styles from './Main.module.scss';

interface ImageProps {
	imageId: string | undefined;
}

interface StateConnect{
	posts: { imagesStorage: Array<string> }
}

function mapStateToProps (state: StateConnect) {
	return {
		images: state.posts.imagesStorage
	}
};

function Image (props: ImageProps) {
	//const path = '../images/' + this.props.imageId + '.jpg';
	return(
		<div>
			<p>{props.imageId}</p>
			<img src={props.imageId} alt="A mountain"/>
		</div>
	);
}

function UserGallery ({images}: {images?: Array<string>}) {
	if (!images) {
		return <p> No posts yet</p>
	}
	return (
		<article className={Styles.userGallery}>
			{images.map((item: string | undefined, index: number) => <Image imageId={item} key={index.toString()} />)}
		</article>
	);
}


export default connect(mapStateToProps, null)(UserGallery);