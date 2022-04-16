/* eslint-disable react/destructuring-assignment */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { INLINES } from '@contentful/rich-text-types'
import OutsideLink from '~components/Navigation/OutsideLink'
import type { CONTENTFUL_JSON } from '~types'
import styles from './ContentfulRichText.module.scss'

const customMarkdownOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: any) => {
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

export default function ContentfulRichText({ json }: CONTENTFUL_JSON) {
  return (
    <div data-testid="contentful-body" className={styles.markdown}>
      {documentToReactComponents(json, customMarkdownOptions)}
    </div>
  )
}
