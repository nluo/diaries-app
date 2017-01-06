import * as React from 'react'
import { Link } from 'react-router'
import { Navigation } from './navigation'
import { SideMenu } from './side-menu'

export function MainLayout(props: any) {
  return (
    <div className="flex-grid">
      <nav className="navbar">
        <Navigation />
      </nav>
      <aside className="primary-aside">
        <SideMenu />
      </aside>
      <main >
        <div className="main-content">
          {props.children}
        </div>
      </main>
    </div>
  )
}
