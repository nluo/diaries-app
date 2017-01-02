import * as React from 'react'
import { connect } from 'react-redux'
import { getAll } from '../../api/diary'
import store from '../../store'
import { DiaryList } from '../views/diary-list'

export class DiaryListContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    componentDidMount() {
        return getAll()
    }

    render() {
        return (
            <DiaryList { ... this.props } />
        )
    }
}

const mapStateToProps = function (store: any) {
    return {
        diaries: store.diaryState.diaries,
        diaryForm: store.diaryState.diaryForm
    }
}

export default connect(mapStateToProps)(DiaryListContainer)
