import React from 'react'

export const useViewMobile = (media: number = 769) => {
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])
  const updateDimensions = () => {
    const width = window.innerWidth
    setWidth(width)
  }
  return width < media
}

