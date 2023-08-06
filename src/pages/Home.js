import React from 'react'
import TopBar from '../components/common/TopBar'
import Banner from '../components/Banner'
import ProductsContainer from '../components/Products/ProductsContainer'
import { useParams } from 'react-router-dom'
const Home = () => {
  const {categoryId} = useParams()
  return (
    <div>
        <Banner/>
        <h2>{categoryId ? `${categoryId} For You!` : 'Featured Products!'}</h2>
        <ProductsContainer categoryId={categoryId}/>
    </div>
  )
}

export default Home