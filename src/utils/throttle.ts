export type ThrottleOptions = {
  leading?: boolean
  trailing?: boolean
}

export default function throttle<T extends (...arg: any) => any>(
  callback: T,
  wait: number,
  options: ThrottleOptions = {}
) {
  let result: T
  let timeout: NodeJS.Timeout | null = null
  let previous = 0

  const next = () => {
    previous = options?.leading === false ? 0 : Date.now()
    timeout = null
    result = callback()
  }

  return () => {
    const now = Date.now()
    if (!previous && options?.leading === false) previous = now
    const remaining = wait - (now - previous)

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = callback()
    } else if (!timeout && options?.trailing !== false) {
      timeout = setTimeout(next, remaining)
    }

    return result
  }
}
