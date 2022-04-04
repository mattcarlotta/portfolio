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
        className="text-md m-0 rounded-t-xl bg-primary-50 p-2 text-center font-bold text-white"
      >
        {children}
      </h1>
    </header>
  )
}
