import * as React from 'react'
import { connect } from 'react-redux'
import  { getFriends } from '../../api/friends'
import store from '../../store'
import { getFriendsSuccess } from '../../actions/friends-actions'
import { FriendsList } from '../views/friends-list'

export class FriendListContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    public async componentDidMount() {
        let friends = await getFriends()
        store.dispatch(getFriendsSuccess(friends))
    }

    render() {
        return (
            <FriendsList friends = {this.props.friends} deleteFriend= {console.log} />
        )
    }
}

const mapStateToProps = function (store) {
    return {
        friends: store.friendState.friends
    }
}

export default connect(mapStateToProps)(FriendListContainer)