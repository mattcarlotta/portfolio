import clsx from 'clsx'
import type { Children, DataTestId, OptionalClassName } from '~types'

export type InfoProps = Children & DataTestId & OptionalClassName

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
