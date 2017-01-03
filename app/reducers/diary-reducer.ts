import * as types from '../actions/action-types'
import * as objectAssign from 'object-assign'

const initialState: any= {
    diaries: [],
    diaryForm: {
        open: false
    }
}

const diaryReducer = function (state = initialState, action: any) {
    switch (action.type) {
        case types.GET_DIARIES_SUCCESS:
            return objectAssign({}, state, { diaries: action.payload })
        case types.CREATE_DIARY_SUCCESS:
            let copyState = objectAssign({}, state)
            copyState.diaries.push(action.payload)
            return objectAssign({}, copyState)
        case types.OPEN_DIARY_FORM:
            return objectAssign({}, state, {diaryForm: {open: true}})
        case types.CLOSE_DIARY_FORM:
            return objectAssign({}, state, {diaryForm: {open: false}})
    }
    return state
}

export { diaryReducer }