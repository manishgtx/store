import React from 'react'
import {BsChevronDown} from "react-icons/bs"
import styles from '../../styles/filters.module.css'
const Filters = () => {
  return (
    <div className={styles.main}>
      <div>
        <div>Headphone Type<BsChevronDown/></div>
        <div>Price <BsChevronDown/></div>
        <div>Review<BsChevronDown/></div>
        <div>Color<BsChevronDown/></div>
        <div>Material<BsChevronDown/></div>
        <div>Offer<BsChevronDown/></div>
        <div>All Filters<BsChevronDown/></div>
      </div>
      <div className={styles.sortBy}>Sort By<BsChevronDown/></div>
    </div>
  )
}

export default Filters