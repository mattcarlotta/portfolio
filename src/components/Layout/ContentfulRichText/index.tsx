/* eslint-disable react/destructuring-assignment */
import { INLINES } from '@contentful/rich-text-types'
import OutsideLink from '~components/Navigation/OutsideLink'
import type { BlockOrInline, CONTENTFUL_JSON, Text } from '~types'
import { documentToReactComponents } from '~utils/richTextRender'
import styles from './ContentfulRichText.module.scss'

const customMarkdownOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: BlockOrInline) => {
      const nodeContent = node.content?.[0] as Text
      const title = nodeContent?.value

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
