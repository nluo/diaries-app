import * as React from 'react'
import { connect } from 'react-redux'
import  { getFriends } from '../../api/friends'
import store from '../../store'
import { getFriendsSuccess, getFriendsError } from '../../actions/friends-actions'
import { FriendsList } from '../views/friends-list'

export class FriendListContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    public async componentDidMount() {
        try {
            let friends = (await getFriends()).data
            store.dispatch(getFriendsSuccess(friends))
        } catch (error) {
            store.dispatch(getFriendsError(error))
        }
    }

    render() {
        return (
            <FriendsList friends = {this.props.friends} deleteFriend= {console.log} />
        )
    }
}

const mapStateToProps = function (store: any) {
    return {
        friends: store.friendState.friends
    }
}

export default connect(mapStateToProps)(FriendListContainer)
