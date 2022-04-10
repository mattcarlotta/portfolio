import type { ReactNode } from '~types'

export default function DetailHeadline({
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
        data-testid={id}
        className="mt-5 text-2xl font-bold text-gray-200"
      >
        {children}
      </h2>
    </header>
  )
}
