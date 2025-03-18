import React, {useEffect} from 'react'

import Banner from '../components/Banner/Banner'
import ProductList from '../components/ProductList/ProductList'
import { getProducts } from '../redux/product/productSlice'
import { useDispatch, useSelector } from 'react-redux'


function Home() {
      const dispatch = useDispatch()
      const {products, loading, erroe} = useSelector((state) => state.products)
  
      useEffect(() => {
          dispatch(getProducts("laptops"))
      }, [dispatch])
  return (
    <div>
      <Banner/>
      <ProductList data={products}/>
    </div>
  )
}

export default Home
