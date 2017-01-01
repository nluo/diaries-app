import { combineReducers } from 'redux'

// Reducers
import { friendReducer } from './friend-reducer'

const reducers = combineReducers({
    friendState: friendReducer
})

export default reducers
