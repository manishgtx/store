import React from 'react'
import headphone from '../../assets/Headphones.jpg'
import styles from '../../styles/Products/singleProduct.module.css'
import Like from './Like'
import { useNavigate } from 'react-router-dom'
const SingleProduct = ({image,price,rating,title,description,category,id}) => {
  const navigate = useNavigate()
  return (
    <div className={styles.main}>
        <Like/>
        <img src={image} alt="" />
        <div onClick={()=> navigate(`/categories/${category}/${id}`)}>
            <div>
                <h4>{title.slice(0,20)}</h4>
                <p>${price}</p>
            </div>
            <p>{description.slice(0,60)}...</p>
        </div>
            <button className={styles.btn}>Add to Cart</button>
        
    </div>
  )
}

export default SingleProduct