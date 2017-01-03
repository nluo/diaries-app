import { Link } from 'react-router'
import * as React from 'react'

import { List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const ActionButton = (
    <FloatingActionButton secondary={true} >
        <ContentAdd />
    </FloatingActionButton>
)

export function FriendsList(props: FriendsProps) {
    return (

        <div>

            <List>
                <ListItem disabled = { true } rightIconButton={ ActionButton } />
                <Subheader>Friends List</Subheader>
                {
                    props.friends.map((user) => {
                        let userAvatar = `https://api.adorable.io/avatars/285/${user.email}.png`
                        return (
                            <ListItem
                                key = {user.id}
                                primaryText={user.name}
                                secondaryText= {user.email}
                                leftAvatar = {<Avatar src={userAvatar} />}
                                rightIcon={<CommunicationChatBubble />}
                            />
                        )
                    })
                }
            </List>
        </div>
    )
}
