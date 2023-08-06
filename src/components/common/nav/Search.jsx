import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import styles from './search.module.css'
const Search = () => {
  return (
    <div className={styles.search}>
        <input type="text" placeholder='Search Product'/>
        <AiOutlineSearch/>
    </div>
  )
}

export default Search