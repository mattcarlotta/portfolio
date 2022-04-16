/* istanbul ignore file */
import Link from '~components/Navigation/Link'
import { GoHome } from '~icons'

export default function GoBack({
  href,
  title
}: {
  href: string
  title: string
}) {
  return (
    <div className="text-center">
      <Link
        dataTestId="navigate-home"
        ariaLabel={`Navigate back to ${title} page`}
        href={href}
      >
        <GoHome className="mr-1 align-middle text-xl" />
        go back to {title} page
      </Link>
    </div>
  )
}
