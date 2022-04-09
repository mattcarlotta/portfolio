import Bars from '~components/Layout/Bars'
import Card from '~components/Layout/Card'
import CardTitle from '~components/Layout/CardTitle'
import Flex from '~components/Layout/Flex'
import Image from '~components/Layout/Image'
import NormalText from '~components/Layout/NormalText'
import Tooltip from '~components/Layout/Tooltip'
import Link from '~components/Navigation/Link'
import OutsideLink from '~components/Navigation/OutsideLink'
import { FaLink, FaRegFileCode, FiPower, ImInfo } from '~icons'
import type { CONTENTFUL_JSON, ReactElement } from '~types'
import ContentfulRichText from '../ContentfulRichText'

export type CardPreviewProps = {
  active?: boolean
  alt?: string
  ariaLabel: string
  description: string | CONTENTFUL_JSON
  contentType: string
  height: number
  href?: string
  imagePriority?: boolean
  location?: string | null
  scale?: number
  showInfo?: boolean
  slug?: string
  source?: string
  status?: string
  title: string
  url: string
  width: number
}

const CardPreview = ({
  active,
  alt = '',
  ariaLabel,
  contentType,
  description,
  height,
  href,
  imagePriority,
  location,
  scale,
  showInfo = true,
  slug = '',
  source,
  status,
  title,
  url,
  width
}: CardPreviewProps): ReactElement => (
  <Card>
    <div data-placeholder="true" className="hidden" />
    <div className="panel-container">
      <CardTitle id={title}>{title}</CardTitle>
      <Bars />
      <Flex justify="center" height="230px" width="100%">
        <Link
          dataTestId={title}
          ariaLabel={ariaLabel}
          padding="0px"
          href={`/${href}/${slug}`}
        >
          <Image
            priority={imagePriority}
            url={url}
            alt={alt}
            scale={scale}
            height={height}
            width={width}
            contentType={contentType}
            className="rounded"
          />
        </Link>
      </Flex>
      <Flex justify="center" width="100%" margin="5px 0 10px 0">
        {Boolean(status) && (
          <Tooltip title={status}>
            <Link
              dataTestId={`status-${title}`}
              ariaLabel={ariaLabel}
              padding="5px"
              margin="0 5px"
              href={`/${href}/${slug}`}
            >
              <FiPower
                data-testid="fipower"
                style={{
                  color: active ? 'limegreen' : 'yellow',
                  fontSize: 22
                }}
              />
            </Link>
          </Tooltip>
        )}
        {showInfo && (
          <Tooltip title="More Info">
            <Link
              dataTestId={`info-${title}`}
              ariaLabel={ariaLabel}
              padding="5px"
              margin="0 5px"
              href={`/${href}/${slug}`}
            >
              <ImInfo style={{ fontSize: 22 }} />
            </Link>
          </Tooltip>
        )}
        {location && (
          <Tooltip title="Demo">
            <OutsideLink
              ariaLabel={`Navigate to ${title} demo page.`}
              href={location}
              className="mx-1.5 p-1.5"
            >
              <FaLink style={{ fontSize: 22 }} />
            </OutsideLink>
          </Tooltip>
        )}
        {source && (
          <Tooltip title="Source">
            <OutsideLink
              ariaLabel={`Navigate to ${title} source page.`}
              href={source}
              className="mx-1.5 p-1.5"
            >
              <FaRegFileCode style={{ fontSize: 24 }} />
            </OutsideLink>
          </Tooltip>
        )}
      </Flex>
      <header>
        <NormalText className="px-2.5 pt-0 pb-4 text-sm">
          {typeof description === 'string' ? (
            description
          ) : (
            <ContentfulRichText json={description.json} />
          )}
        </NormalText>
      </header>
    </div>
  </Card>
)

export default CardPreview
