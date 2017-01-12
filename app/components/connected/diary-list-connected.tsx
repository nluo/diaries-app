import * as React from 'react'
import { connect } from 'react-redux'
import { create as createDiary } from '../../api/diary'

import { 
    closeDiaryForm, 
    fillUpDiaryForm, 
    openDiaryForm 
} from '../../actions/diary-actions'

import store from '../../store'
import { DiaryListContainer } from '../containers/diary-list-container'

const mapStateToProps = function (store: any) {
    return {
        diaries: store.diaryState.diaries,
        diaryFormOpen: store.diaryState.diaryFormOpen,
        diaryForm: store.diaryState.diaryForm
    }
}

const mapDispatchToProps = function (dispatch: any) {
    return {
        handleSubmit: function (diaryItem: DiaryItem) {
            return createDiary(diaryItem).then((result)=>{
                console.log('pls clean up the form', result)
            })
        },
        handleChange: function (e: any) {
            e.preventDefault()
            //dispatch to update state
            dispatch(fillUpDiaryForm({
                name: e.target.name,
                value: e.target.value
            }))
        },
        handleClose: function (e: any) {
            dispatch(closeDiaryForm())
        },
        showForm: function () {
            store.dispatch(openDiaryForm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiaryListContainer)