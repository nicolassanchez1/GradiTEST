import React, { useMemo } from 'react'
import { BreadCrumb } from 'components/bread-crumb'
import { Carousel } from 'components/carousel'
import { IProduct } from 'models/Product'
import { VariantsForm } from 'components/variants-form'
import { getRoutes } from '.'
import './ProductCard.scss'

export const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
  const { title } = product

  const routes = useMemo(() => getRoutes(title), [title])

  return (
    <div className="product-card flex-1">
      <BreadCrumb routes={routes} />
      <section className="product-card__container flex">
        <Carousel />
        <VariantsForm product={product} />
      </section>
    </div>
  )
}
