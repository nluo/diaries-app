import * as React from 'react'
import { connect } from 'react-redux'
import { getAll } from '../../api/diary'
import { DiaryList } from '../views/diary-list'
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
                    handleDateChange = {this.props.handleDateChange}
                    error = {this.props.diaryFormError}
                    />
            </div>
        )
    }
}
