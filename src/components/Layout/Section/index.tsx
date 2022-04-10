import { ReactNode } from 'react'

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className="mx-1 mt-5 mb-10 rounded border border-solid border-primary-600 bg-primary-700 p-5 text-center sm:mx-2">
      <header>{children}</header>
    </section>
  )
}
