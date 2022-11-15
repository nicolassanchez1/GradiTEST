import React from 'react'
import './Carousel.scss'
import { IMedia } from '../../models/Product'
import { useViewMobile } from '../../hooks/useViewMobile'

export const Carousel: React.FC<{ images: IMedia[] }> = ({ images }) => {

  const isTablet = useViewMobile(1250)

  return (
      <div className='flex flex-col images-wrapper'>
      <div className='images-wrapper__first' style={{backgroundImage: `url(${images[0]?.src})` }}/>
          <div className='flex images-wrapper__wrap mt-20'>
            {images.slice(1).map( item => <div style={{backgroundImage: `url(${item?.src})`}}/> )}
          </div>
      </div>
  )
}
