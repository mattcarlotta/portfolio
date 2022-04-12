/* istanbul ignore file */
import Bars from '~components/Layout/Bars'
import PanelBody from '~components/Layout/PanelBody'
import type { ReactNode } from '~types'

const Panel = ({ children }: { children: ReactNode }) => (
  <div className="text-primary-2 mb-16 w-full overflow-hidden rounded-b-sm bg-primary-700 font-bold">
    <PanelBody>
      <Bars />
      {children}
    </PanelBody>
  </div>
)

export default Panel
