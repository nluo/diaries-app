import * as React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

import store from '../../store'
import { closeDiaryForm } from '../../actions/diary-actions'

import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'

function handleClose () {
    store.dispatch(closeDiaryForm())
}

export function DiaryForm (props: any) {
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
      <div>
        <Dialog
          title="New Diary"
          actions={actions}
          modal={false}
          open={props.open}
          onRequestClose={handleClose}
        >
          <form onSubmit={props.search} className="search">
            <TextField
              hintText="Diary Title"
              errorText={props.errors ? props.errors.title: null}
            />
            <br /><br />
            <TextField
              floatingLabelText="Diary content..."
              multiLine = { true }
              rows= { 5 }
            /><br />

            <DatePicker hintText="Pick a date" mode="landscape" />
          </form>
        </Dialog>
      </div>
    );
}