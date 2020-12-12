import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Styles from './Main.module.scss';

interface AddPostProps {
	createPost: Function
}

interface AddPostState {
	title: string
}

export default class AddPost extends Component {
	constructor(props: any) {
		super(props)

		this.state = {
			title: ''
		}

		this.changeInputHandler = this.changeInputHandler.bind(this);
		// this.submitHandler = this.submitHandler.bind(this);
	}

	// submitHandler(event: any) {
	// 	event.preventDefault();

	// 	const {title} : {title?: string} = this.state;

	// 	if (!title.trim()) {
	// 		return
	// 	}

	// 	const newPost = {
	// 		title, id: Date.now.toString()
	// 	}

	// 	this.props.createPost(newPost);
	// 	this.setState({title: ''});
	// }

	changeInputHandler(event: any) {
		event.persist();
		this.setState( prev => ({...prev, ...{
			[event.target.name]: event.target.value
		}}));
	}

	render() {
		return(
			<form>
				<label htmlFor="titleInput">Title: </label>
				<input 
					type="text" 
					id="titleInput"
					className={Styles.titleInput}
					//value={this.state.title}
					name="title"
					onChange={this.changeInputHandler}
				/>
				<label htmlFor="url">Url: </label>
				<input type="text" id="url" name="url" className={Styles.url} />
				<input type="submit" value="Submit"></input>
			</form>
		);
	}
}

// const mapDispatchToProps = {
// 	createPost
// }

//export default connect(null, mapDispatchToProps)(AddPost);