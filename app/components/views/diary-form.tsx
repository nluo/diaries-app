import * as React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

import store from '../../store'
import { closeDiaryForm } from '../../actions/diary-actions'

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
          title="Create Diary"
          actions={actions}
          modal={false}
          open={props.open}
          onRequestClose={handleClose}
        >
          <form onSubmit={props.search} className="search">

          </form>
        </Dialog>
      </div>
    );
}