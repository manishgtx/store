import {useState} from 'react'
import {navData} from '../../../meta/navData'
import {BsChevronDown} from "react-icons/bs"
import styles from './categories.module.css'
const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.wrap}>
      <div className={styles.categoryWrapper}>Categories<BsChevronDown className={styles.icon}/></div>
        <ul className={styles.items}>
            {navData.map((category) => {
                const {name} = category
                return <li>{name}</li>
            })}
        </ul>
      </div>
      
        
    </div>
  )
}

export default Categories