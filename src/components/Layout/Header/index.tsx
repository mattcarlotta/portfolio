import LinkIcon from '~components/Navigation/LinkIcon'
import HEADERLINKS from './HEADERLINKS'

export default function Header() {
  return (
    <nav data-testid="head" className="mb-10 p-4 pt-10 lg:mb-0">
      <div className="mx-auto flex max-w-sm flex-wrap place-content-around items-center lg:flex-nowrap">
        {HEADERLINKS.map(({ href, page }) => (
          <LinkIcon
            key={page}
            className="p-1 text-[0.7rem] lg:text-[0.6rem]"
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
