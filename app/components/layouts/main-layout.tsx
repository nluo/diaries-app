import * as React from 'react'
import { Link } from 'react-router'
import { Navigation } from './navigation'
import { SideMenu } from './side-menu'

export function MainLayout(props: any) {
  return (
    <div className="diaries-app">

      <nav className="navbar">
        <Navigation />
      </nav>
      <aside className="primary-aside">
        <SideMenu />
      </aside>
      <main className="main-layout">
        {props.children}
      </main>

    </div>
  )
}
