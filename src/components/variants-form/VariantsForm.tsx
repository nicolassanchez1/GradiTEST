import React, { FormEvent, useCallback, useEffect, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Button } from 'components/button'
import { IProduct } from 'models/Product'
import { formatMoney } from 'utils/value'
import { Colors, Sizes, Units } from './components'
import { IPurchaseData, IVariants } from '.'

export const VariantsForm: React.FC<{ product: IProduct }> = ({ product }) => {
  const [purchaseData, setPurchaseData] = useState<IPurchaseData>({ color: 'Red', size: '', units: 1 })
  const [variants, setVariants] = useState<IVariants>({ colors: [], sizes: [] })

  const { description, options, price, title, vendor } = product

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
    <form className="variants-form flex-1">
      <p className="variants-form__vendor">by {vendor}</p>
      <p className="variants-form__name">{title}</p>
      <p className="variants-form__price">{formatMoney(price)}</p>
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
