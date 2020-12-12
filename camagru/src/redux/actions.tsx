import { CREATE_POST } from "./types";

export function createPost(post: Object) {
	return {
		type: CREATE_POST,
		payload: post
	}
}