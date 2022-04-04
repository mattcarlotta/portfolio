import type { ReactNode } from '~types'

export default function CategoryDescription({
  children
}: {
  children: ReactNode
}) {
  return <p className="mb-5 p-2 text-center font-plain">{children}</p>
}
