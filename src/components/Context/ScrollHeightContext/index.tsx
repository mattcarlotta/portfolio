/* istanbul ignore file */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import type { Children } from '~types'
import throttle from '~utils/throttle'

export const ScrollHeight = createContext({ clientHeight: 0, scrollHeight: 0 })

export function useScrollHeight() {
  const context = useContext(ScrollHeight)
  if (!context) {
    throw new Error(
      'This component cannot be rendered outside the ScrollHeight component'
    )
  }
  return context
}

export default function ScrollHeightProvider({ children }: Children) {
  const [scrollHeight, setScrollHeight] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  const context = useMemo(
    () => ({ clientHeight, scrollHeight }),
    [clientHeight, scrollHeight]
  )

  const handleScroll = useRef(
    throttle(() => {
      setClientHeight(document.body.clientHeight)
      setScrollHeight(document.documentElement.scrollTop)
    }, 300)
  )

  useEffect(() => {
    setClientHeight(document.body.clientHeight)
    setScrollHeight(document.documentElement.scrollTop)

    window.addEventListener('scroll', handleScroll.current)
    window.addEventListener('resize', handleScroll.current)

    return () => {
      window.removeEventListener('scroll', handleScroll.current)
      window.removeEventListener('resize', handleScroll.current)
    }
  }, [])

  return (
    <ScrollHeight.Provider value={context}>{children}</ScrollHeight.Provider>
  )
}
