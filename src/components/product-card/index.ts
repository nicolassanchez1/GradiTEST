export * from './ProductCard'

export const PRODUCT_MODEL = {
  id: 0,
  title: '',
  handle: '',
  description: '',
  published_at: new Date(),
  created_at: new Date(),
  vendor: '',
  type: '',
  tags: [],
  price: 0,
  price_min: 0,
  price_max: 0,
  available: false,
  price_varies: false,
  compare_at_price: 0,
  compare_at_price_min: 0,
  compare_at_price_max: 0,
  compare_at_price_varies: false,
  variants: [],
  images: [],
  featured_image: '',
  options: [],
  url: '',
  media: [],
}

export const getRoutes = (productName: string): string[] => ['Cátalogo', 'Productos', productName]
