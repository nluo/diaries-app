import * as axios from 'axios'
import store from '../store'
import { getFriendsSuccess, addFriendSuccess } from '../actions/friends-actions'


export function getFriends() {
    return axios.get('http://localhost:8000/friends')
}
