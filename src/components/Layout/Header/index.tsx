import { css } from '@emotion/react'
import FlexSpaceAround from '~components/Layout/FlexSpaceAround'
import Orbits from '~components/Layout/Orbits'
import LinkIcon from '~components/Navigation/LinkIcon'
import Center from '~components/Layout/Center'
import Headline from '~components/Layout/Headline'
import SubHeadline from '~components/Layout/SubHeadline'
import OutsideLinkIcon from '~components/Navigation/OutsideLinkIcon'
import Tooltip from '~components/Layout/Tooltip'
import type { ReactElement } from '~types'
import HEADERLINKS from './HEADERLINKS'

const Header = (): ReactElement => (
  <nav
    data-testid="head"
    css={css`
      padding-top: 60px;
    `}
  >
    <FlexSpaceAround
      breakpoint
      direction="row"
      style={{ listStyle: 'none', margin: '0 auto', padding: 0, height: 55 }}
    >
      {HEADERLINKS.map(({ href, page, Icon, external }) => {
        const LinkComponent = !external ? LinkIcon : OutsideLinkIcon
        return (
          <Tooltip key={page} title={page}>
            <LinkComponent
              dataTestId={`go-to-${page}`}
              ariaLabel={`Navigate to my ${page} page`}
              href={href}
            >
              <Icon />
            </LinkComponent>
          </Tooltip>
        )
      })}
    </FlexSpaceAround>
    <Orbits />
    <Center as="header" data-testid="header">
      <Headline>MATT CARLOTTA</Headline>
      <SubHeadline>Fullstack Software Engineer</SubHeadline>
    </Center>
  </nav>
)

export default Header
