import {useEffect} from 'react'
import SingleProduct from './SingleProduct'
import styles from '../../styles/Products/productsContainer.module.css'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from '../../store'
const ProductsContainer = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  console.log(products)
  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])
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