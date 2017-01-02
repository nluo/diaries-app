import * as React from 'react'
import { Link } from 'react-router'
import { Navigation } from './navigation'
import { SideMenu } from './side-menu'

export function MainLayout (props: any) {
    return (
        <div className="row">
          <div className="col-md-12">
              <Navigation />
          </div>

          <div className="col-md-3">
            <SideMenu />
          </div>
          <div className="col-md-9">
            <main>
              { props.children }
            </main>
          </div>
         </div>
    )
}
