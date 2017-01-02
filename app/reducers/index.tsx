import { combineReducers } from 'redux'

// Reducers
import { friendReducer } from './friend-reducer'
import { diaryReducer } from './diary-recuder'

const reducers = combineReducers({
    friendState: friendReducer,
    diaryState: diaryReducer
})

export default reducers
