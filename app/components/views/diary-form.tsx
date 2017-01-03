import * as React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

import store from '../../store'
import { closeDiaryForm } from '../../actions/diary-actions'

import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import { CardText, Card } from 'material-ui/Card'

function handleClose() {
    store.dispatch(closeDiaryForm())
}

export function DiaryForm(props: DiaryFormProps) {

    const { open, onSubmit, onChange, errors, diary } = props

    const actions = [
        <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={handleClose}
            />,
        <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onTouchTap={handleClose}
            />,
    ];

    return (
        <Dialog
            actions={actions}
            modal={false}
            open={open}
            onRequestClose={handleClose}
            autoScrollBodyContent={true}
            >
            <div className="diary-form">
                <h2> New Diary </h2>
                <form onSubmit={props.onSubmit} className="search">
                    <TextField
                        hintText="Diary Title"
                        errorText={props.errors ? props.errors.title : null}
                        fullWidth = {true}
                        />
                    <br />
                    <DatePicker hintText="Pick a date" mode="landscape" fullWidth = {true} />
                    <br />
                    <TextField
                        floatingLabelText="Diary content..."
                        multiLine={true}
                        rows={5}
                        fullWidth = {true}
                        /><br />
                </form>
            </div>
        </Dialog>
    );
}