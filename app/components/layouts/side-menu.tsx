import * as React from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

// import ContentInbox from 'material-ui/svg-icons/content/inbox'
import Face from 'material-ui/svg-icons/action/face'
import Home from 'material-ui/svg-icons/action/home'
import Book from 'material-ui/svg-icons/action/book'
export function SideMenu () {
    return (
        <List>
            <ListItem primaryText="Home" leftIcon={<Home />}  containerElement={<Link to="/"/>}/>
            <ListItem primaryText="Diaries" leftIcon={<Book />}  containerElement={<Link to="/diaries"/>}/>
            <ListItem primaryText="Friends"  leftIcon={<Face />} containerElement={<Link to="/friends"/>}/>
        </List>
    )
}