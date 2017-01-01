import { Link } from 'react-router'

interface User {
    id: number,
    email: string
    name: string
}

interface FriendsProps {
    friends: User[],
    deleteFriend: Function 
}

export function FriendsList (props: FriendsProps) {
    return (
        <div className="data-list">
            {props.friends.map( (user) => {
                <div key={user.id} className="data-list-item">
                <div className="details">
                    {user.email}
                </div>
                <div className="controls">
                    <button onClick={props.deleteFriend.bind(null, user.id)} className="delete">Delete</button>
                </div>
            </div>
            })}
        </div>
    )
}