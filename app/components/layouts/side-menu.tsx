import * as React from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

import ContentInbox from 'material-ui/svg-icons/content/inbox'
import Face from 'material-ui/svg-icons/action/face'
export function SideMenu () {
    return (
        <List>
            <ListItem primaryText="Home" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Friends"  leftIcon={<Face />} containerElement={<Link to="/friends"/>}/>
        </List>
    )
}