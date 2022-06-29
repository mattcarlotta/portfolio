import { RefObject, useEffect, useState } from 'react'
import { useScrollHeight } from '~components/Context/ScrollHeightContext'

export default function useLoadingElement(ref: RefObject<any>) {
  const [isLoading, setLoading] = useState(true)
  const { clientHeight, scrollHeight } = useScrollHeight()

  useEffect(() => {
    if (ref.current && clientHeight > 0 && isLoading) {
      const { top } = ref.current.getBoundingClientRect()
      /* istanbul ignore next */
      if (clientHeight >= top || scrollHeight >= top) setLoading(false)
    }
  }, [isLoading, scrollHeight, clientHeight])

  return isLoading
}
