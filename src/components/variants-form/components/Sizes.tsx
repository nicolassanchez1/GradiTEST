import React from 'react'
import { ISizes } from '.'

export const Sizes: React.FC<ISizes> = ({ sizes, purchaseData, setPurchaseData }) => (
  <section className="variants-form__sizes flex">
    <span className='variants-form__span'>Size:</span>
    <div className="variants-form__sizes-container flex">
      {sizes.map(size => (
        <div
          key={size}
          className={`variants-form__size center pointer ${purchaseData.size === size ? 'selected-item' : ''}`}
          onClick={() => setPurchaseData({ ...purchaseData, size })}
        >
          <span className={`variants-form__size-value ${purchaseData.size === size ? 'text-black' : ''}`}>{size}</span>
        </div>
      ))}
    </div>
  </section>
)
