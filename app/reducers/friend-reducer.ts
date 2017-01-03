import * as types from '../actions/action-types'
import * as objectAssign from 'object-assign'

const initialState: any= {
    friends: []
}

const friendReducer = function (state=initialState, action: any) {
    switch (action.type) {
        case types.GET_FRIENDS_SUCCESS:
            return objectAssign({}, state, { friends: action.payload })
    }
    return state
}

export { friendReducer }