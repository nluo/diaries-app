import * as types from '../actions/action-types'

const initialState: any= {
    diaries: [],
    diaryForm: {
        open: false
    }
}

const diaryReducer = function (state = initialState, action: any) {
    switch (action.type) {
        case types.GET_DIARIES_SUCCESS:
            return Object.assign({}, state, { diaries: action.payload })
        case types.CREATE_DIARY_SUCCESS:
            let copyState = Object.assign({}, state)
            copyState.diaries.push(action.payload)
            return Object.assign({}, copyState)
        case types.OPEN_DIARY_FORM:
            return Object.assign({}, state, {diaryForm: {open: true}})
        case types.CLOSE_DIARY_FORM:
            return Object.assign({}, state, {diaryForm: {open: false}})
    }
    return state
}

export { diaryReducer }