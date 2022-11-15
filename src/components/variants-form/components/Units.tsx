import React from 'react'
import { IUnits } from '.'
import { formatMoney } from '../../../utils/value'

export const Units: React.FC<IUnits> = ({ price, purchaseData, setPurchaseData }) => {
  const addUnits = (value: number): void => {
    if (value === -1 && purchaseData.units === 1) return
    setPurchaseData({ ...purchaseData, units: purchaseData.units + value })
  }

  return (
    <section className="variants-form__units flex">
      <div className="variants-form__quantity-box flex center">
        <span className="variants-form__quantity-button pointer" onClick={() => addUnits(-1)}>
          -
        </span>
        <span className="variants-form__cart-units">{purchaseData.units}</span>
        <span className="variants-form__quantity-button pointer" onClick={() => addUnits(1)}>
          +
        </span>
      </div>
      <p className="variants-form__price-label">
        Total price: <span className="variants-form__price-value">{formatMoney(price * purchaseData.units)}</span>
      </p>
    </section>
  )
}
