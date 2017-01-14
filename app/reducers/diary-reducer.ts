import * as types from '../actions/action-types'
import * as objectAssign from 'object-assign'

const initialState: any = {
    diaries: [],
    diaryForm: {
        title: '',
        date: '',
        body: ''
    },
    diaryFormOpen: false,
    diaryFormError: {}
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
            return objectAssign({}, state, { diaryFormOpen: true })
        case types.CLOSE_DIARY_FORM:
            return objectAssign({}, state, { diaryFormOpen: false })
        case types.FILL_DIARY_FORM:
            let diaryFormItem: DiaryFormItem = action.payload
            let diaryForm = objectAssign({}, state.diaryForm)

            diaryForm[diaryFormItem.name] = diaryFormItem.value
            return objectAssign({}, state, { diaryForm: diaryForm })
        case types.CLEAR_DIARY_FORM:
            return objectAssign({}, state,
                {
                    diaryForm: {},
                    diaryFormError: {}
                })
        case types.PARSE_DIARY_FORM_ERROR:
            return objectAssign({}, state, { diaryFormError: action.payload })
        case types.CLEAR_DIARY_FORM_ERROR:
            return objectAssign({}, state,
                {
                    diaryFormError: {}
                })
    }
    return state
}

export { diaryReducer }