import * as types from '../actions/action-types'

const initialState: any= {
    diaries: []
}

const diaryReducer = function (state = initialState, action: any) {
    switch (action.type) {
        case types.GET_DIARIES_SUCCESS:
            return Object.assign({}, state, { diaries: action.payload })
        case types.CREATE_DIARY_SUCCESS:
            let copyState = Object.assign({}, state)
            copyState.diaries.push(action.payload)
            return Object.assign({}, copyState)
    }
    return state
}

export { diaryReducer }