import * as React from 'react'
import { connect } from 'react-redux'
import { 
    closeDiaryForm, 
    fillUpDiaryForm, 
    openDiaryForm ,
    submitForm,
    clearDiaryForm
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
            return submitForm(diaryItem).then(()=>{
                console.log('sucessfully created')
                dispatch(clearDiaryForm())
                dispatch(closeDiaryForm())
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
        handleDateChange: function (e: any, date: any) {
            dispatch(fillUpDiaryForm({
                name: 'date',
                value: date
            }))
        },
        handleClose: function (e: any) {
            dispatch(clearDiaryForm())
            dispatch(closeDiaryForm())
        },
        showForm: function () {
            store.dispatch(openDiaryForm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiaryListContainer)