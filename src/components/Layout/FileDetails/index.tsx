import clsx from 'clsx'
import Info from '~components/Layout/Info'
import OutsideLink from '~components/Navigation/OutsideLink'
import { AiOutlineFolderOpen, FaRegFileCode, FiPower, IoRocket } from '~icons'
import type { CSSProperties } from '~types'

export type FileDetailsProps = {
  active: boolean
  fileName: string
  location?: string | null
  status: string
  source: string
}

const style = {
  fontSize: 20,
  verticalAlign: 'middle',
  marginRight: 10
} as CSSProperties

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
      <FiPower data-testid="fipower" style={style} />
      {status}
    </Info>
    <Info className="uppercase" dataTestId="filename">
      <AiOutlineFolderOpen style={style} />
      {fileName}
    </Info>
    {location && (
      <Info dataTestId="location">
        <IoRocket style={style} />
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
      <FaRegFileCode style={style} />
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
