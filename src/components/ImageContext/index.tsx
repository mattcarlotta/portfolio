/* istanbul ignore file */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactElement, ReactNode } from '~types'

export const ImageContext = createContext({ supportsWebp: false })

export const useImageContext = (): { supportsWebp: boolean } => {
  const context = useContext(ImageContext)
  if (!context) {
    throw new Error(
      'This component cannot be rendered outside the ImageContext component'
    )
  }
  return context
}

const ImageProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [webpSupport, setSupport] = useState(true)
  const supportsWebp = useMemo(
    () => ({ supportsWebp: webpSupport }),
    [webpSupport]
  )

  useEffect(() => {
    const testWebP = () => {
      const img = new Image()
      img.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
      img.onload = () => {
        setSupport(img.height === 2)
      }
      img.onerror = () => {
        setSupport(false)
      }
    }

    testWebP()
  }, [])

  return (
    <ImageContext.Provider value={supportsWebp}>
      {children}
    </ImageContext.Provider>
  )
}

export default ImageProvider
