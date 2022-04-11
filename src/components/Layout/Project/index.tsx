/* istanbul ignore file */
import type { ReactNode } from '~types'

export default function Project({
  children,
  dataTestId
}: {
  children: ReactNode
  dataTestId?: string
}) {
  return (
    <article className="my-8 rounded-t-xl shadow-glow" data-testid={dataTestId}>
      {children}
    </article>
  )
}
