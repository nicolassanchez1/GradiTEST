import { Dispatch, SetStateAction } from 'react'
import { IPurchaseData } from '..'

export * from './Colors'
export * from './Sizes'
export * from './Units'

export interface ISizes {
  sizes: string[]
  setPurchaseData: Dispatch<SetStateAction<IPurchaseData>>
  purchaseData: IPurchaseData
}

export interface IColors {
  colors: string[]
  setPurchaseData: Dispatch<SetStateAction<IPurchaseData>>
  purchaseData: IPurchaseData
}

export interface IUnits {
  price: number
  setPurchaseData: Dispatch<SetStateAction<IPurchaseData>>
  purchaseData: IPurchaseData
}
