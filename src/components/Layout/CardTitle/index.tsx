import type { ReactNode } from '~types'

export default function CardTitle({
  children,
  id
}: {
  children: ReactNode
  id: string
}) {
  return (
    <header>
      <h2
        id={id}
        data-title="card-title"
        className="m-0 bg-primary-800 p-0.5 text-xxs font-bold leading-4 text-white"
      >
        {children}
      </h2>
    </header>
  )
}
