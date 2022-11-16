import React, { useMemo } from 'react'
import { useViewMobile } from '../../hooks/useViewMobile'
import { IProduct } from '../../models/Product'
import { BreadCrumb } from '../bread-crumb'
import { Carousel } from '../carousel'
import { VariantsForm } from '../variants-form'
import { getRoutes } from '.'
import './ProductCard.scss'

export const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
  const isMobile = useViewMobile()
  const { title } = product
  const routes = useMemo(() => getRoutes(title), [title])

  return (
    <div className="product-card flex-1">
      <BreadCrumb routes={routes} />
      <section className={`product-card__container flex ${isMobile ? 'flex-col center' : ''} w-full`}>
        <Carousel images={product.media} />
        <VariantsForm product={product} />
      </section>
    </div>
  )
}
