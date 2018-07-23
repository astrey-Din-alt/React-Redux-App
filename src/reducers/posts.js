import {
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from '../constants/Reddit'

export default function posts( state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    }, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return {...state, 
                didInvalidate: true
            }
        case REQUEST_POSTS:
            return {...state, 
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE_POSTS:
            return {...state, 
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}
