import type { ReactNode } from '~types'

export default function Info({ children }: { children: ReactNode }) {
  return <p className="my-2.5 break-all p-0 sm:break-normal">{children}</p>
}
