import * as types from './action-types'

interface FriendsActionTypes {
    type: string,
    payload: any
}


export function getFriendsSuccess (friends: any): FriendsActionTypes {
    return {
        type: types.GET_FRIENDS_SUCCESS,
        payload: friends
    }
}

export function addFriendSuccess (friendEmail: string): FriendsActionTypes {
    return {
        type: types.ADD_FRIEND_SUCCESS,
        payload: friendEmail
    }
}

export function getFriendsError (error: Error): FriendsActionTypes {
    return {
        type: types.GET_FRIENDS_SUCCESS,
        payload: error
    }
}

