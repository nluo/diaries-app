import * as React from 'react'
import { connect } from 'react-redux'
import { 
    closeDiaryForm, 
    fillUpDiaryForm, 
    openDiaryForm ,
    submitForm,
    clearDiaryForm,
    parseDiaryFormError
} from '../../actions/diary-actions'

import * as _ from 'lodash'

import store from '../../store'
import { DiaryListContainer } from '../containers/diary-list-container'

function validateDiaryForm (diaryItem?: DiaryItem): DiaryFormError {
    let error = {}
    if (!diaryItem) {
        diaryItem = store.getState().diaryState.diaryForm
    }
    if (!diaryItem.title || diaryItem.title.trim() === '') {
        error = _.assign({}, error, {title: 'Diary title cannot be empty'})
    }

    if (!diaryItem.body || diaryItem.body.trim() === '') {
        error = _.assign({}, error, {body: 'Diary body cannot be empty'})
    }

    return error
}

const mapStateToProps = function (store: any) {
    return {
        diaries: store.diaryState.diaries,
        diaryFormOpen: store.diaryState.diaryFormOpen,
        diaryForm: store.diaryState.diaryForm,
        diaryFormError: store.diaryState.diaryFormError
    }
}

const mapDispatchToProps = function (dispatch: any) {
    return {
        handleSubmit: function (diaryItem: DiaryItem) {
            // Validate the form
            let error = validateDiaryForm(diaryItem)

            dispatch(parseDiaryFormError(error))

            if (!_.isEmpty(error)) {
                return
            }

            if (!diaryItem.date) {
                diaryItem = _.assign({}, diaryItem, { date: new Date() })
            }

            return submitForm(diaryItem).then(()=>{
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
            let error = validateDiaryForm()
            dispatch(parseDiaryFormError(error))
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