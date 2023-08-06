import React from 'react'
import girl from '../assets/woman.png'
import styles from '../styles/banner.module.css'
const Banner = () => {
  return (
    <div className={styles.main}>
        <div>
            <h1>Grab Upto 50% off On<br/> Selected Headphone</h1>
            <button>Buy Now</button>
        </div>
        <img src={girl} alt="" />
    </div>
  )
}

export default Banner