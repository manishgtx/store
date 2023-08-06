import React from 'react'
import styles from '../../styles/topBar.module.css'
import { BsChevronDown, BsTelephone } from 'react-icons/bs'
const TopBar = () => {
  return (
    <div className={styles.main}>
      <div>
        <div>
          <BsTelephone/>
          <p>+001234567890</p>
        </div>
        <p>Get 50% Off on Selected Items | <span>Shop Now</span></p>
        <div>
          <div>
            <p>Eng</p>
            <BsChevronDown/>
          </div>
          <div>
            <p>Location</p>
            <BsChevronDown/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar