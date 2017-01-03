import * as axios from 'axios'
import store from '../store'
import { getDiariesSuccess, getDiarySuccess, createDiarySuccess } from '../actions/diary-actions'

interface DiaryEntry {
    title: string,
    body: string,
    date?: string,
    author?: string
}

export function getAll() {
    return axios.get('http://localhost:8000/diaryentries/').then((response: any) => {
        store.dispatch(getDiariesSuccess(response.diaries))
    }).catch((error) => {
        console.log('get all diaryies error is ', error)
    })
}

export function get(id: number) {
    return axios.get(`http://localhost:8000/diaryentries/${id}`).then((response: any) => {
        store.dispatch(getDiariesSuccess(response.diaries))
    }).catch((error) => {
        console.log('get all diaryies error is ', error)
    })
}

export function create (payload: DiaryEntry) {
    axios.post('http://localhost:8000/diaryentries/').then((diary) => {
        return store.dispatch(createDiarySuccess(diary.data))
    }).catch((error) => {
        return store.dispatch({
            type: 'CREATE_DIARY_ERROR',
            payload: error
        })
    })
}