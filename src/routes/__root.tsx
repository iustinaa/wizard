import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="p-2 text-lg">
        <Link to="/" activeOptions={{exact: true }}
        > <span className='font-bold'>Courses</span></Link>
      </div>
      <hr />
      <Outlet />
    </>
  )
}
