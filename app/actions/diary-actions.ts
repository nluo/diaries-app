import * as types from './action-types'
import { create as createDiary, getAll } from '../api/diary'
import * as _ from 'lodash'

export function getDiariesSuccess (diaries: any) {
    return {
        type: types.GET_DIARIES_SUCCESS,
        payload: diaries
    }
}

export function getDiarySuccess (diary: any) {
    return {
        type: types.GET_DIARY_SUCCESS,
        payload: diary
    }
}

export function createDiarySuccess (diary: any) {
    return {
        type: types.CREATE_DIARY_SUCCESS,
        payload: diary
    }
}

export function openDiaryForm () {
    return {
        type: types.OPEN_DIARY_FORM
    }
}

export function closeDiaryForm () {
    return {
        type: types.CLOSE_DIARY_FORM
    }
}

export function clearDiaryForm () {
    return {
        type: types.CLEAR_DIARY_FORM
    }
}

export function fillUpDiaryForm (diaryFormItem: DiaryFormItem) {
    return {
        type: types.FILL_DIARY_FORM,
        payload: diaryFormItem
    }
}

export function parseDiaryFormError (error: DiaryFormError) {
    return {
        type: types.PARSE_DIARY_FORM_ERROR,
        payload: error
    }
}

export function submitForm (diaryFormItem: DiaryItem) {
    return createDiary(diaryFormItem).then((result) => {
        // reload
        return getAll()
    }, (error) => {
        //show errors
    })
}

export function clearDiaryFormError () {
    return {
        type: types.CLEAR_DIARY_FORM_ERROR
    }
}