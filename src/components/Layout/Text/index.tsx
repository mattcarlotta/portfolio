import type { ReactNode } from '~types'

export default function Text({ children }: { children: ReactNode }) {
  return <div className="py-2.5 px-5 tracking-wide">{children}</div>
}
