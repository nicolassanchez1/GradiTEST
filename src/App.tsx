import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IProduct } from './models/Product'
import { Header } from './components/header'
import { PRODUCT_MODEL, ProductCard } from './components/product-card'
import { Footer } from './components/footer'

const App: React.FC = () => {
  const [product, setProduct] = useState<IProduct>(PRODUCT_MODEL)

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    const { data } = await axios(`${process.env.REACT_APP_BASE_URL}`)
    setProduct(data)
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ProductCard product={product} />
      <Footer />
    </div>
  )
}

export default App
