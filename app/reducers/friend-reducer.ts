import * as types from '../actions/action-types'

const initialState: any= {
    friends: []
}

const friendReducer = function (state=initialState, action: any) {
    switch (action.type) {
        case types.GET_FRIENDS_SUCCESS:
            return Object.assign({}, state, { friends: action.payload })
    }
    return state
}

export { friendReducer }