/* istanbul ignore file */
import type { ReactNode } from '~types'

export default function Category({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-5 text-center font-stylized text-lg leading-none md:text-2xl">
      {children}
    </h2>
  )
}
