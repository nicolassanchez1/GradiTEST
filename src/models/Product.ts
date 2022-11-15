export interface IProduct {
  id: number
  title: string
  handle: string
  description: string
  published_at: Date
  created_at: Date
  vendor: string
  type: string
  tags: string[]
  price: number
  price_min: number
  price_max: number
  available: boolean
  price_varies: boolean
  compare_at_price: number
  compare_at_price_min: number
  compare_at_price_max: number
  compare_at_price_varies: boolean
  variants: IVariant[]
  images: string[]
  featured_image: string
  options: IOption[]
  url: string
  media: IMedia[]
}

export interface IMedia {
  alt: null
  id: number
  position: number
  preview_image: IPreviewImage
  aspect_ratio: number
  height: number
  media_type: string
  src: string
  width: number
}

export interface IPreviewImage {
  aspect_ratio: number
  height: number
  width: number
  src: string
}

export interface IOption {
  name: string
  position: number
  values: string[]
}

export interface IVariant {
  id: number
  title: string
  option1: string
  option2: string
  option3: null
  sku: string
  requires_shipping: boolean
  taxable: boolean
  featured_image: null
  available: boolean
  name: string
  public_title: string
  options: string[]
  price: number
  weight: number
  compare_at_price: number
  inventory_management: string
  barcode: string
}
