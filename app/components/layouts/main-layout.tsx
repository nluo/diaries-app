import * as React from 'react'
import { Link } from 'react-router'
import { Navigation } from './navigation'

export function MainLayout (props: any) {
    return (
        <div className="row">
          <div className="col-md-12">
              <Navigation />
          </div>
          <div className="col-md-3">
              <aside className="primary-aside">
                <ul>
                  <li><Link to="/" activeClassName="active">Home</Link></li>
                  <li><Link to="/friends" activeClassName="active">My Friends</Link></li>
                  <li><Link to="/diaries" activeClassName="active">My Diaries</Link></li>
                </ul>
              </aside>
          </div>
          <main className="col-md-9">
            { props.children }
          </main>
         </div>
    )
}
