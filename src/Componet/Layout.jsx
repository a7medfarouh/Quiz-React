import React from 'react'
import { Outlet } from 'react-router-dom'
import Settings from './Settings'

export default function Layout() {
  return <>
  <Outlet/>
  </>
}
