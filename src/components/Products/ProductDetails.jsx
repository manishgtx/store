import React, { useEffect } from 'react'
import HeadPhones from '.././../assets/Headphones.jpg'
import styles from '../../styles/Products/productsDetails.module.css'
import { BiShoppingBag} from 'react-icons/bi'
import {FiTruck} from 'react-icons/fi'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleUser } from '../../store'
const ProductDetails = () => {
    const {categoryId,productId} = useParams()
    console.log(productId)
    const dispatch = useDispatch()
    const {singleProduct:data,isLoading} = useSelector((state) => state.products)
    console.log(data)
    useEffect(()=> {
        dispatch(getSingleUser(productId))
    },[dispatch])
    if(isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <div className={styles.main}>
        <h5><span>Categories</span> / <span>{categoryId}</span> / <span>{data.title}</span></h5>
        <div>
            <div className={styles.container1}>
                <div className={styles.imgContainer}>
                    <img src={data.image} alt="" />
                </div>
                <div className={styles.imgSelection}>
                <img src={HeadPhones} alt="" />
                <img src={HeadPhones} alt="" />
                <img src={HeadPhones} alt="" />
                <img src={HeadPhones} alt="" />
                </div>
            </div>
            
            <div className={styles.infoWrapper}>
                <div className={styles.productInfo}>
                <h2>{data.title}</h2>
                <p>a perfect balance of exhilarating high-fidelity audio and the effortless magic of Airpods.</p>
                </div>
                <div className={styles.pricing}>
                    <h4>${data.price}</h4>
                    <p>{data.description}</p>
                </div>
                <h4>Choose a Color</h4>
                {/* Choose a Color Component */}
                <div className={styles.toggleBtnWrapper}>
                    <div className={styles.toggleBtn}>
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </div>
                    <div>
                        <p>Only <span>12 Items Left!</span></p>
                        <p>Don't miss it</p>
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <button>Buy Now</button>
                    <button>Add to Cart</button>
                </div>
                <div className={styles.tileWrapper}>
                    <div className={styles.tile}>
                            <span>
                                <FiTruck/>
                            </span>
                        <div>
                            <h4>Free Delivery</h4>
                            <p>Enter your postal code for delivery availablity</p>
                        </div>
                    </div>
                    <div className={styles.tile}>
                            <span>
                                <BiShoppingBag/>
                            </span>
                        <div className={styles.secondTileWrapper}>
                            <h4>Return Delivery</h4>
                            <p>Free 30 days Delivery Returns. <span>Details</span></p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ProductDetails