import type { ChildrenWithId } from '~types'

export default function DetailHeadline({ children, id }: ChildrenWithId) {
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
