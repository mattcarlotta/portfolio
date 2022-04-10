import Link from '~components/Navigation/Link'
import { GoHome } from '~icons'

export type GoBackProps = {
  href: string
  title: string
}

export default function GoBack({ href, title }: GoBackProps) {
  return (
    <div className="text-center">
      <Link
        dataTestId="navigate-home"
        ariaLabel={`Navigate back to ${title} page`}
        href={href}
        fontSize="15px"
        showUnderline
      >
        <GoHome className="mr-1 align-middle text-xl" />
        go back to {title} page
      </Link>
    </div>
  )
}
