/* istanbul ignore file */
import type { Children } from '~types'

export type ProjectProps = Children & { dataTestId?: string }

export default function Project({ children, dataTestId }: ProjectProps) {
  return (
    <article className="my-8 rounded-t-xl shadow-glow" data-testid={dataTestId}>
      {children}
    </article>
  )
}
