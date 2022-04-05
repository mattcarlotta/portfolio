/* eslint-disable react/destructuring-assignment */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { INLINES } from '@contentful/rich-text-types'
import OutsideLink from '~components/Navigation/OutsideLink'
import type { Document, NodeData } from '~types'
import styles from './ContentfulRichText.module.scss'

const customMarkdownOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: NodeData) => {
      const title = node.content?.[0]?.value

      return (
        <OutsideLink
          showIcon
          ariaLabel={`Navigate to ${title} page`}
          href={node.data?.uri}
        >
          {title}
        </OutsideLink>
      )
    }
  }
}

export default function ContentfulRichText({ json }: { json: Document }) {
  return (
    <div className={styles.markdown}>
      {documentToReactComponents(json, customMarkdownOptions)}
    </div>
  )
}
