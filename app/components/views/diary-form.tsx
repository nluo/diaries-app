import * as React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

import store from '../../store'

import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import { CardText, Card } from 'material-ui/Card'


export function DiaryForm(props: DiaryFormProps) {
    const { open, onSubmit, onChange, onClose, diary, handleDateChange, error } = props

    const actions = [
        <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={onClose}
            />,
        <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onTouchTap={onSubmit.bind(this, props.diary)}
            />,
    ];

    return (
        <Dialog
            actions={actions}
            modal={false}
            open={open}
            onRequestClose={onClose}
            autoScrollBodyContent={true}
            >
            <div className="diary-form">
                <h2> New Diary </h2>
                <form onSubmit={props.onSubmit} className="search">
                    <TextField
                        hintText="Diary Title"
                        errorText={props.error ? props.error.title : null}
                        fullWidth={true}
                        name="title"
                        value={diary.title}
                        onChange={onChange}
                        />
                    <br />
                    <DatePicker
                        hintText="Pick a date"
                        mode="landscape"
                        fullWidth={true}
                        name="date"
                        value={ diary.date }
                        onChange={ handleDateChange } />
                    <br />
                    <TextField
                        floatingLabelText="Diary content..."
                        multiLine={true}
                        rows={5}
                        fullWidth={true}
                        name="body"
                        value={diary.body}
                        onChange={onChange}
                         errorText={props.error ? props.error.body : null}
                        /><br />
                </form>
            </div>
        </Dialog>
    );
}