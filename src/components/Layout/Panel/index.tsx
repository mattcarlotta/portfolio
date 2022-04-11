/* istanbul ignore file */
import Bars from '~components/Layout/Bars'
import PanelBody from '~components/Layout/PanelBody'
import type { ReactNode } from '~types'

const Panel = ({ children }: { children: ReactNode }) => (
  <div className="mb-16 w-full overflow-hidden rounded-b-md bg-primary-700 font-bold text-primary-25">
    <PanelBody>
      <Bars />
      {children}
    </PanelBody>
  </div>
)

export default Panel
