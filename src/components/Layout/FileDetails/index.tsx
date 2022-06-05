import Info from '~components/Layout/Info'
import OutsideLink from '~components/Navigation/OutsideLink'
import CodeIcon from '~icons/CodeIcon'
import DemoIcon from '~icons/DemoIcon'
import StatusIcon from '~icons/StatusIcon'
import clsx from '~utils/clsx'

export type FileDetailsProps = {
  active: boolean
  location?: string | null
  status: string
  source: string
}

const FileDetails = ({
  active,
  location,
  source,
  status
}: FileDetailsProps) => (
  <div className="mb-5 pl-4 font-plain">
    <Info
      className={clsx(active ? 'text-lime-500' : 'text-gray-500')}
      dataTestId="status"
    >
      <StatusIcon className="mr-2.5 align-middle text-xl" />
      {status}
    </Info>
    {location && (
      <Info dataTestId="location">
        <DemoIcon className="mr-2.5 align-middle text-xl text-amber-500" />
        <OutsideLink
          dataTestId="location-link"
          href={location}
          ariaLabel="Navigate to demo website"
          showIcon
        >
          Demo
        </OutsideLink>
      </Info>
    )}
    <Info dataTestId="source">
      <CodeIcon className="mr-2.5 align-middle text-xl" />
      <OutsideLink
        dataTestId="source-link"
        href={source}
        ariaLabel="Navigate to source code"
        showIcon
      >
        Source
      </OutsideLink>
    </Info>
  </div>
)

export default FileDetails
