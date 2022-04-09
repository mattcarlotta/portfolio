import clsx from 'clsx'
import type { ReactNode } from '~types'

export default function NormalText({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className={clsx('font-plain', className ?? 'text-base')}>
      {children}
    </div>
  )
}
