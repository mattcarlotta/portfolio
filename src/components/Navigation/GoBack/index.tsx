import Center from '~components/Layout/Center'
import Link from '~components/Navigation/Link'
import { GoHome } from '~icons'

export type GoBackProps = {
  href: string
  title: string
}

export default function GoBack({ href, title }: GoBackProps) {
  return (
    <Center>
      <Link
        dataTestId="navigate-home"
        ariaLabel={`Navigate back to ${title} page`}
        href={href}
        fontSize="15px"
        showUnderline
      >
        <GoHome style={{ marginRight: 5, position: 'relative', top: 2 }} />
        go back to {title}
      </Link>
    </Center>
  )
}
