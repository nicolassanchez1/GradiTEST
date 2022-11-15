import React, { FormEvent, useCallback, useEffect, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { formatMoney } from '../../utils/value'
import { IProduct } from '../../models/Product'
import { Button } from '../button'
import { Colors, Sizes, Units } from './components'
import { IPurchaseData, IVariants } from '.'

export const VariantsForm: React.FC<{ product: IProduct }> = ({ product }) => {
  const [purchaseData, setPurchaseData] = useState<IPurchaseData>({ color: 'Red', size: '', units: 1 })
  const [variants, setVariants] = useState<IVariants>({ colors: [], sizes: [] })

  const { description, options, price, title, vendor, compare_at_price } = product

  const getVariants = useCallback(() => {
    if (options.length) {
      const [colors, sizes] = options
      setVariants({ colors: [...colors.values, 'white'], sizes: sizes.values })
    }
  }, [options])

  useEffect(() => getVariants(), [getVariants])

  const addToCart = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    alert('agregando al carrito')
  }

  return (
    <form className="variants-form" style={{width: "40%"}}>
      <p className="variants-form__vendor">by {vendor}</p>
      <p className="variants-form__name">{title}</p>
      <div className='flex variants-form__price-wrap'>
        <p className="variants-form__price">{formatMoney(price)}</p>
        <p className="variants-form__price-max">{formatMoney(compare_at_price)}</p>
      </div>
      <Colors colors={variants.colors} purchaseData={purchaseData} setPurchaseData={setPurchaseData} />
      <Sizes sizes={variants.sizes} purchaseData={purchaseData} setPurchaseData={setPurchaseData} />
      <Units price={price} purchaseData={purchaseData} setPurchaseData={setPurchaseData} />
      <div className="variants-form__buttons flex">
        <Button text="Add to favorite" onClick={() => alert('holi1')} />
        <Button text="Add to cart" black onClick={addToCart} type="submit" />
      </div>
      <p className="variants-form__description">{ReactHtmlParser(description)}</p>
    </form>
  )
}
