﻿import { REQUEST_POSTS, RECEIVE_POSTS, SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT } from '../constants/Reddit'

export function selectSubreddit(subreddit){
	return {
		type: SELECT_SUBREDDIT,
		subreddit
	}
}

export function invalidateSubreddit(subreddit) {
	return {
		type: INVALIDATE_SUBREDDIT,
		subreddit
	}
}

export function requestPosts(subreddit) {
	return {
		type: REQUEST_POSTS,
		subreddit
	}
}

export function receivePosts(subreddit, json) {
	return {
		type: RECEIVE_POSTS,
		subreddit,
		posts: json.data.children.map(child => child.data),
		receivedAt: Date.now()
	}
}
export function fetchPosts(subreddit) {
	return dispatch => {
		dispatch(requestPosts(subreddit))
		return fetch('https://www.reddit.com/r/' + subreddit + '.json')
		  .then(response => response.json())
		  .then(json => dispatch(receivePosts(subreddit, json)))
	}
}
export function shouldFetchPosts(state, subreddit) {
	const posts = state.postsBySubreddit[subreddit]
	if (!posts) {
		return true
	} else if (posts.isFetching) {
		return false
	} else {
		return posts.didInvalidate
	}
}
export function fetchPostsIfNeeded(subreddit) {
	return (dispatch, getState) => {
		if (shouldFetchPosts(getState(), subreddit)) {
			return dispatch(fetchPosts(subreddit))
		}
	}
}