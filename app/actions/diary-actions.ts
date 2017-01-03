import * as types from './action-types'
import { create as createDiary } from '../api/diary'

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

export function fillUpDiaryForm (diaryFormItem: DiaryFormItem) {
    return {
        type: types.FILL_DIARY_FORM,
        payload: diaryFormItem
    }
}


export function validDiaryForm (diaryFormItem: DiaryFormItem ) {

}

export function submitForm (diaryFormItem: DiaryItem) {
    return createDiary(diaryFormItem)
}