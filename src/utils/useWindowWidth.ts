import { useEffect, useState } from 'react'
import throttle from './throttle'

export default function calculateWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  useEffect(() => {
    const updateWindowWidth = throttle(() => {
      setWidth(window.innerWidth)
    }, 300)

    updateWindowWidth()

    window.addEventListener('resize', updateWindowWidth)

    return () => {
      window.removeEventListener('resize', updateWindowWidth)
    }
  }, [])

  return width
}
