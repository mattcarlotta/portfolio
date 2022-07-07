import NextLink from 'next/link'
import Bars from '~components/Layout/Bars'
import Card from '~components/Layout/Card'
import CardTitle from '~components/Layout/CardTitle'
import Image from '~components/Layout/Image'
import Tooltip from '~components/Layout/Tooltip'
import Link from '~components/Navigation/Link'
import OutsideLink from '~components/Navigation/OutsideLink'
import CodeIcon from '~icons/CodeIcon'
import DemoIcon from '~icons/DemoIcon'
import StatusIcon from '~icons/StatusIcon'
import type { AriaLabel, HeightAndWidth, Title } from '~types'
import clsx from '~utils/clsx'

export type CardPreviewProps = AriaLabel &
  HeightAndWidth &
  Title & {
    active?: boolean
    alt?: string
    description: string
    contentType: string
    href?: string
    imagePriority?: boolean
    location?: string | null
    scale?: number
    slug?: string
    source?: string
    status?: string
    url: string
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
  slug = '',
  source,
  status,
  title,
  url,
  width
}: CardPreviewProps) => (
  <Card>
    <CardTitle id={title}>{title}</CardTitle>
    <Bars />
    <div className="flex h-[14.375rem] items-center justify-center">
      <Link
        dataTestId={title}
        ariaLabel={ariaLabel}
        href={`/${href}/${slug}`}
        noFocusRing
      >
        <Image
          className="rounded"
          priority={imagePriority}
          url={url}
          alt={alt}
          scale={scale}
          height={height}
          width={width}
          contentType={contentType}
        />
      </Link>
    </div>
    <div className="mt-1 flex items-center justify-center">
      {Boolean(status) && (
        <Tooltip title={status}>
          <Link
            dataTestId={`status-${title}`}
            ariaLabel={ariaLabel}
            href={`/${href}/${slug}`}
            className="mx-1 p-2"
          >
            <StatusIcon
              className={clsx(
                'text-lg',
                active ? 'text-lime-500' : 'text-gray-500'
              )}
            />
          </Link>
        </Tooltip>
      )}
      {location && (
        <Tooltip title="Demo">
          <OutsideLink
            ariaLabel={`Navigate to ${title} demo page.`}
            href={location}
            className="mx-1 flex items-center justify-center p-2"
          >
            <DemoIcon className="text-lg text-amber-500" />
          </OutsideLink>
        </Tooltip>
      )}
      {source && (
        <Tooltip title="Source">
          <OutsideLink
            ariaLabel={`Navigate to ${title} source page.`}
            href={source}
            className="mx-1 flex items-center justify-center p-2"
          >
            <CodeIcon className="text-lg" />
          </OutsideLink>
        </Tooltip>
      )}
    </div>
    <NextLink href={`/${href}/${slug}`} prefetch={false}>
      <a className="m-2 block rounded border-2 border-solid border-transparent px-2.5 py-4 font-plain text-md transition-colors hover:text-white focus:border-primary-100 focus:text-white">
        {description}
      </a>
    </NextLink>
  </Card>
)

export default CardPreview
