import clsx from 'clsx'
import Info from '~components/Layout/Info'
import NormalText from '~components/Layout/NormalText'
import OutsideLink from '~components/Navigation/OutsideLink'
import { AiOutlineFolderOpen, FaLink, FaRegFileCode, FiPower } from '~icons'
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
}: FileDetailsProps): JSX.Element => (
  <NormalText margin="0 0 20px 0" padding="0 0 0 15px" fontSize="16px">
    <Info
      className={clsx(active ? 'text-lime-400' : 'text-yellow-400')}
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
        <FaLink style={style} />
        <OutsideLink
          data-testid="location-link"
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
        data-testid="source-link"
        href={source}
        ariaLabel="Navigate to source code"
        showIcon
      >
        Source
      </OutsideLink>
    </Info>
  </NormalText>
)

export default FileDetails
