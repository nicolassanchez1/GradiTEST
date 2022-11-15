import React, { useMemo } from 'react'
import { getRoutes } from '.'
import './ProductCard.scss'
import { IProduct } from '../../models/Product'
import { BreadCrumb } from '../bread-crumb'
import { Carousel } from '../carousel'
import { VariantsForm } from '../variants-form'

export const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
  const { title } = product

  const routes = useMemo(() => getRoutes(title), [title])

  return (
    <div className="product-card flex-1">
      <BreadCrumb routes={routes} />
      <section className="product-card__container flex w-full flex">
        <Carousel images={product.media} />
        <VariantsForm product={product} />
      </section>
    </div>
  )
}
