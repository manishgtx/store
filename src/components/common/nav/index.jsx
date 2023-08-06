import React from 'react'
import styles from './nav.module.css'
import Categories from './Categories'
import {BsCart} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {BiMenu} from 'react-icons/bi'
import Search from './Search'
import SideBar from './SideBar'
import { useDispatch,useSelector } from 'react-redux'
import {open,close} from '../../../store'
const Nav = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector((state) => state.navbar.isOpen)
    const handleOpen = () => {
        dispatch(open())
    }
    const handleClose = () => {
        dispatch(close())
    }
  return (
    <div className={styles.nav}>
        <h2>Shopcart</h2>
        <div className={styles.desktopWrapper}>
            <ul>
                <Categories/>
                <li>Deals</li>
                <li>What's New</li>
                <li>Delivery</li>
            </ul>
            <Search/>
            <div>
                <div>
                    <AiOutlineUser/>
                    <p>Account</p>
                </div>
                <div>
                    <BsCart/>
                    <p>Cart</p>
                </div>
            </div>
        </div>
        <BiMenu className={styles.menu} onClick={handleOpen}/>
        {isOpen && <SideBar handleClose={handleClose}/>}
    </div>
  )
}

export default Nav