import clsx from 'clsx'
import Info from '~components/Layout/Info'
import OutsideLink from '~components/Navigation/OutsideLink'
import { AiOutlineFolderOpen, FaRegFileCode, FiPower, IoRocket } from '~icons'

export type FileDetailsProps = {
  active: boolean
  fileName: string
  location?: string | null
  status: string
  source: string
}

const FileDetails = ({
  active,
  location,
  fileName,
  source,
  status
}: FileDetailsProps) => (
  <div className="mb-5 pl-4 font-plain">
    <Info
      className={clsx(active ? 'text-lime-500' : 'text-yellow-500')}
      dataTestId="status"
    >
      <FiPower data-testid="fipower" className="mr-2.5 align-middle text-xl" />
      {status}
    </Info>
    <Info className="uppercase" dataTestId="filename">
      <AiOutlineFolderOpen className="mr-2.5 align-middle text-xl" />
      {fileName}
    </Info>
    {location && (
      <Info dataTestId="location">
        <IoRocket className="mr-2.5 align-middle text-xl" />
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
      <FaRegFileCode className="mr-2.5 align-middle text-xl" />
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
