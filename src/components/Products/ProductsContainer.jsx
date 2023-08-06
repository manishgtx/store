import {useEffect} from 'react'
import SingleProduct from './SingleProduct'
import styles from '../../styles/Products/productsContainer.module.css'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from '../../store'
import { useParams } from 'react-router-dom'
const ProductsContainer = ({categoryId}) => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  useEffect(() => {
    if(categoryId){
      dispatch(fetchProducts(categoryId))
    } else {
      dispatch(fetchProducts())
    }
  },[categoryId])
  return (
    <div className={styles.main}>
      {
        products.map((productData) => {
          return <SingleProduct key={productData.id} {...productData}/>
        })
      }
    </div>
  )
}

export default ProductsContainer