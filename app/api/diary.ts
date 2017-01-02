import * as axios from 'axios'
import store from '../store'
import { getDiariesSuccess, getDiarySuccess, createDiarySuccess } from '../actions/diary-actions'

interface DiaryEntry {
    title: string,
    body: string,
    date?: string,
    author?: string
}

export async function getAll() {
    try {
        const diaries = (await axios.get('http://localhost:8000/diaryentries/')).data
        store.dispatch(getDiariesSuccess(diaries))
    } catch (error) {
        console.log('get all diaryies error is ', error)
    }
}

export async function get(id: number) {
    try {
        const diary = (await axios.get(`http://localhost:8000/diaryentries/${id}`)).data
        store.dispatch(getDiarySuccess(diary))
    } catch (error) {

    }
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