import React from 'react'
import { IColors } from '.'

export const Colors: React.FC<IColors> = ({ colors, purchaseData, setPurchaseData }) => (
  <section className="variants-form__colors flex">
    <span>Color:</span>
    <div className="variants-form__colors-container flex">
      {colors.map(color => (
        <div
          key={color}
          className={`variants-form__color center rounded-full pointer ${
            purchaseData.color === color ? 'selected-item' : ''
          }`}
          onClick={() => setPurchaseData({ ...purchaseData, color })}
        >
          <div className="variants-form__color-fill rounded-full" style={{ background: color }} />
        </div>
      ))}
    </div>
  </section>
)
