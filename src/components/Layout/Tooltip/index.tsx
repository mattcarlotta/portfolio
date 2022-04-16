import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from '~types'

export default function Tooltip({
  children,
  title
}: {
  children: ReactNode
  title?: string
}) {
  const [isMounted, setMounted] = useState(false)
  const tooltipRef = useRef<HTMLDivElement | null>(null)
  const tooltipArrowRef = useRef<HTMLDivElement | null>(null)

  const handleShowTooltip = () => {
    if (tooltipRef.current && tooltipArrowRef.current) {
      tooltipRef.current.style.display = 'block'
      const { width } = tooltipRef.current.getBoundingClientRect()
      tooltipRef.current.style.translate = `-${Math.round(width / 4.75)}px`
      tooltipRef.current.style.top = '79%'
      tooltipRef.current.style.opacity = '1'

      tooltipArrowRef.current.style.top = '89%'
      tooltipArrowRef.current.style.translate = '130%'
      tooltipArrowRef.current.style.transform = 'rotate(45deg)'
      tooltipArrowRef.current.style.opacity = '1'
      tooltipArrowRef.current.style.display = 'block'
    }
  }

  const handleHideTooltip = () => {
    if (tooltipRef.current && tooltipArrowRef.current) {
      tooltipRef.current.style.opacity = '0'
      tooltipRef.current.style.display = ''

      tooltipArrowRef.current.style.opacity = '0'
      tooltipArrowRef.current.style.display = ''
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return isMounted ? (
    <div className="relative">
      <div
        role="presentation"
        className="flex items-center"
        onFocus={handleShowTooltip}
        onBlur={handleHideTooltip}
        onMouseEnter={handleShowTooltip}
        onMouseLeave={handleHideTooltip}
      >
        {children}
      </div>
      <div
        className="whitespace-no-wrap fixed z-[200] hidden rounded bg-primary-25 px-4 py-2 font-plain text-tiny text-white opacity-0"
        ref={tooltipRef}
      >
        {title}
      </div>
      <div
        className="fixed z-[100] hidden h-3 w-3 bg-primary-25 opacity-0"
        ref={tooltipArrowRef}
      />
    </div>
  ) : null
}
