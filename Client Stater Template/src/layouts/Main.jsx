import React from 'react'
import { Outlet } from 'react-router'

function Main() {
  return (
    <main className="">
        <h1 className="text-4xl font-bold text-gray-800 text-center py-4 bg-gray-200">This is a simple navbar</h1>
        <Outlet />
    </main>
  )
}

export default Main