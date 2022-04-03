import LinkIcon from '~components/Navigation/LinkIcon'
import type { ReactElement } from '~types'
import HEADERLINKS from './HEADERLINKS'

export default function Header(): ReactElement {
  return (
    <nav data-testid="head" className="mb-10 p-4 lg:mt-0 lg:mb-0">
      <div className="mx-auto flex max-w-xs flex-wrap place-content-around items-center lg:flex-nowrap">
        {HEADERLINKS.map(({ href, page }) => (
          <LinkIcon
            key={page}
            className="text-[0.6rem]"
            dataTestId={`go-to-${page}`}
            ariaLabel={`Navigate to my ${page} page`}
            href={href}
          >
            {page}
          </LinkIcon>
        ))}
      </div>
    </nav>
  )
}
