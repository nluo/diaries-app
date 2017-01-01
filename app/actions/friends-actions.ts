import * as types from './action-types'

interface FriendsActionTypes {
    type: string,
    payload: any
}

export function getFriendsSuccess (friends): FriendsActionTypes {
    return {
        type: types.GET_FRIENDS_SUCCESS,
        payload: friends
    }
}

export function addFriendSuccess (friendEmail): FriendsActionTypes {
    return {
        type: types.ADD_FRIEND_SUCCESS,
        payload: friendEmail
    }
}
