import React from 'react'
import TopBar from '../components/common/TopBar'
import Banner from '../components/Banner'
import ProductsContainer from '../components/Products/ProductsContainer'
const Home = () => {
  return (
    <div>
        <Banner/>
        <h2>Headphones For You!</h2>
        <ProductsContainer/>
    </div>
  )
}

export default Home