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
      <h2 id={id} className="mt-5 text-lg font-bold text-[#ccc]">
        {children}
      </h2>
    </header>
  )
}
