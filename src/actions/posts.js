import {
	FETCH_ALL,
	CREATE,
	UPDATE,
	DELETE,
	FETCH_BY_SEARCH,
	START_LOADING,
	END_LOADING,
	FETCH_POST,
} from '../constants/actionTypes';
import * as api from '../api';

// Action Creators - functions that return action
// action is a type and a payload

export const getPost = (id) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });

		const { data } = await api.fetchPost(id);

		dispatch({ type: FETCH_POST, payload: { post: data } });
		dispatch({ type: END_LOADING });
	} catch (error) {
		console.log(error);
	}
};

export const getPosts = (page) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });
		const { data } = await api.fetchPosts(page);

		console.log(data);
		dispatch({ type: FETCH_ALL, payload: data });
		dispatch({ type: END_LOADING });
	} catch (error) {
		console.log(error);
	}

	//const action = { type: 'FETCH ALL', payload: [] };
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });
		const {
			data: { data },
		} = await api.fetchPostsBySearch(searchQuery);

		dispatch({ type: FETCH_BY_SEARCH, payload: data });
		dispatch({ type: END_LOADING });
	} catch (error) {
		console.log(error);
	}
};

export const createPosts = (post, history) => async (dispatch) => {
	try {
		// dispatch({ type: START_LOADING });
		const { data } = await api.createPost(post);

		dispatch({ type: CREATE, payload: data });

		history.push(`/posts/${data._id}`);
		// dispatch({ type: END_LOADING });
	} catch (error) {
		console.log(error);
	}
};

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);

		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);

		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		console.log(error);
	}
};

export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);

		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};
