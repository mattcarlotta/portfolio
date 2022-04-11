import clsx from 'clsx'
import type { ReactNode } from '~types'

export type InfoProps = {
  children: ReactNode
  className?: string
  dataTestId: string
}

export default function Info({ children, className, dataTestId }: InfoProps) {
  return (
    <p
      data-testid={dataTestId}
      className={clsx(
        'my-2.5 break-all p-0 text-md sm:break-normal',
        className
      )}
    >
      {children}
    </p>
  )
}
