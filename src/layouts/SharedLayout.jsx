import React from 'react'
import Nav from '../components/common/nav'
import { Outlet } from 'react-router-dom'
import styles from '../layouts/SharedLayout.module.css'
import TopBar from '../components/common/TopBar'
const SharedLayout = () => {
  return (
    <div className={styles.main}>
            <TopBar/>
        <div>
            <Nav/>
            <Outlet/>
        </div>
    </div>
  )
}

export default SharedLayout