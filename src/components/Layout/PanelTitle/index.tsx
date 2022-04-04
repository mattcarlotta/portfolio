import type { ReactNode } from '~types'

export default function PanelTitle({ children }: { children: ReactNode }) {
  return (
    <h1
      className="text-md m-0 rounded-t-xl bg-primary-50 p-2 text-center font-bold text-white"
      data-testid="panel-title"
    >
      {children}
    </h1>
  )
}
