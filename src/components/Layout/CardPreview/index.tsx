import clsx from 'clsx'
import Bars from '~components/Layout/Bars'
import Card from '~components/Layout/Card'
import CardTitle from '~components/Layout/CardTitle'
import Image from '~components/Layout/Image'
import Tooltip from '~components/Layout/Tooltip'
import Link from '~components/Navigation/Link'
import OutsideLink from '~components/Navigation/OutsideLink'
import { FaRegFileCode, FiPower, ImInfo, IoRocket } from '~icons'
import type { CONTENTFUL_JSON } from '~types'
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
}: CardPreviewProps) => (
  <Card>
    <div data-placeholder="true" className="hidden" />
    <div className="panel-container">
      <CardTitle id={title}>{title}</CardTitle>
      <Bars />
      <div className="flex h-[14.375rem] items-center justify-center">
        <Link
          dataTestId={title}
          ariaLabel={ariaLabel}
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
      </div>
      <div className="mt-1 mb-2.5 flex items-center justify-center">
        {Boolean(status) && (
          <Tooltip title={status}>
            <Link
              dataTestId={`status-${title}`}
              ariaLabel={ariaLabel}
              href={`/${href}/${slug}`}
            >
              <FiPower
                data-testid="fipower"
                className={clsx(
                  'text-lg',
                  active ? 'text-lime-500' : 'text-yellow-500'
                )}
              />
            </Link>
          </Tooltip>
        )}
        {showInfo && (
          <Tooltip title="More Info">
            <Link
              dataTestId={`info-${title}`}
              ariaLabel={ariaLabel}
              href={`/${href}/${slug}`}
            >
              <ImInfo className="text-lg" />
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
              <IoRocket className="text-lg" />
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
              <FaRegFileCode className="text-lg" />
            </OutsideLink>
          </Tooltip>
        )}
      </div>
      <header>
        <div className="px-2.5 pt-0 pb-4 font-plain text-md">
          {typeof description === 'string' ? (
            description
          ) : (
            <ContentfulRichText json={description.json} />
          )}
        </div>
      </header>
    </div>
  </Card>
)

export default CardPreview
