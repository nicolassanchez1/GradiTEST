import React, { useEffect, useState } from 'react'
import './Carousel.scss'
import { IMedia } from '../../models/Product'
import { useViewMobile } from '../../hooks/useViewMobile'

export const Carousel: React.FC<{ images: IMedia[] }> = ({ images }) => {
  const isMobile = useViewMobile()
  const [lastImage, setLastImage] = useState<number>(0)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [selectedImages, setSelectedImages] = useState<any>([])
  const [selectedImage, setSelectedImage] = useState<any>()
  const [loaded, setLoaded] = useState<boolean>(true)

  const selectNewImage = (selectedIndex: number, images: IMedia[], next: boolean = true): void => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1
      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 500)
  }

  useEffect(() => {
    if (images) {
      setSelectedImages(images)
    }
  }, [images])

  useEffect(() => {
    setSelectedImage(selectedImages[0])
    setLastImage(selectedImages.length - 1)
  }, [selectedImages])

  return (
    <div className="relative flex flex-col images-wrapper">
      {isMobile ? (
        <div className="relative" style={{ marginBottom: '2.5em' }}>
          {selectedImage && (
            <img
              src={selectedImage?.src ?? ''}
              alt={selectedImage?.image_file_name ?? 'Imagen del producto'}
              style={{ height: `${isMobile ? '20em' : '18.75em'}` }}
              className={`images-wrapper_carousel ${loaded ? 'loaded' : ''}`}
              onLoad={() => setLoaded(true)}
            />
          )}
          <div className="images-wrapper_controls">
            <i
              className={`fas fa-chevron-left controls-icon ${selectedIndex === 0 && 'hide'} `}
              onClick={() => selectNewImage(selectedIndex, images, false)}
            />
            <i
              className={`fas fa-chevron-right controls-icon ${selectedIndex === lastImage && 'hide'}`}
              onClick={() => selectNewImage(selectedIndex, images)}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="images-wrapper__first" style={{ backgroundImage: `url(${images[0]?.src})` }} />
          <div className="flex images-wrapper__wrap mt-20">
            {images.slice(1).map(item => (
              <div key={item.id} style={{ backgroundImage: `url(${item?.src})` }} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
