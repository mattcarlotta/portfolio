/* istanbul ignore file */
import type { ReactNode } from '~types'

export default function PanelTitle({
  children,
  id
}: {
  children: ReactNode
  id: string
}) {
  return (
    <header>
      <h1
        id={id}
        data-testid="panel-title"
        className="m-0 rounded-t-xl bg-primary-50 p-2 text-center text-xl font-bold text-white"
      >
        {children}
      </h1>
    </header>
  )
}
