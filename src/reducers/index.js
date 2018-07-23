import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import posts from './posts'
import selectedSubreddit from './selectedSubreddit'
import postsBySubreddit from './postsBySubreddit'

export default combineReducers({
    page,
    user,
    selectedSubreddit,
    posts,
    postsBySubreddit
})