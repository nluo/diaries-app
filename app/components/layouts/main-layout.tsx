import * as React from 'react'
import { Link } from 'react-router'
import { Navigation } from './navigation'

export function MainLayout (props: any) {
    return (
        <div className="row">
          <div className="col-md-12">
              <Navigation />
          </div>

          <main className="col-md-6">
            { props.children }
          </main>
         </div>
    )
}
