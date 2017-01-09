import * as React from 'react'
import { connect } from 'react-redux'
import { getAll, create as createDiary } from '../../api/diary'
import store from '../../store'
import { DiaryList } from '../views/diary-list'

import { closeDiaryForm } from '../../actions/diary-actions'
import { fillUpDiaryForm } from '../../actions/diary-actions'
import { DiaryForm } from '../views/diary-form'

import { openDiaryForm } from '../../actions/diary-actions'

export class DiaryListContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    componentDidMount() {
        return getAll()
    }

    render() {
        return (
            <div>
                <DiaryList
                    diaries={this.props.diaries}
                    showForm = {this.props.showForm}
                    />
                <DiaryForm
                    open={this.props.diaryFormOpen}
                    onSubmit={this.props.handleSubmit}
                    onChange={this.props.handleChange}
                    onClose={this.props.handleClose}
                    diary={this.props.diaryForm}
                    />
            </div>
        )
    }
}

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
