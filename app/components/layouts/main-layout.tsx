import * as React from 'react'
import { Link } from 'react-router'
import { Navigation } from './navigation'

export function MainLayout (props: any) {
    return (
        <div className="app">
          <Navigation/>
          <aside className="primary-aside">
            <ul>
              <li><Link to="/" activeClassName="active">Home</Link></li>
              <li><Link to="/users" activeClassName="active">Users</Link></li>
              <li><Link to="/widgets" activeClassName="active">Widgets</Link></li>
            </ul>
          </aside>
         </div>
    )
}
