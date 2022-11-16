import React, { Dispatch, SetStateAction } from 'react'
import './Modal.scss'
import { IPurchaseData } from '../variants-form'

interface IModal {
  setShowModal: Dispatch<SetStateAction<boolean>>
  title: string
  purchaseData: IPurchaseData
}

export const Modal: React.FC<IModal> = ({ setShowModal, title, purchaseData }) => {
  const { color, size, units } = purchaseData

  return (
    <div className="modal-wrapper_back-drop">
      <div className="modal-wrapper_view">
        <div onClick={() => setShowModal(prev => !prev)} className="close-btn">
          &times;
        </div>
        <p>
          Producto: <span>{title}</span> Agregado correctamente
        </p>
        <span>Tamaño: {size || '7'}</span>
        <span>Color: {color}</span>
        <span>Cantidad: {units}</span>
      </div>
    </div>
  )
}
