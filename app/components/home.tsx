import * as React from 'react'

import { Link } from 'react-router'

export default function Home () {
    return (
        <div className="home-page">
          <h1>Welcome to My Diaries</h1>
          <p>
            You can create and view your diaries. You can create and view your friends' diaries too!
          </p>

          <p>
            Please <Link to="/login" > Login </Link> to continue 
          </p>
        </div>
    )
}
