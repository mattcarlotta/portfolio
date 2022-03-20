/*

  
import type { NodeData, Document, BlogLinks } from '../../../contentful/types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import Image from '../CustomImage'
import markdownStyles from './markdown-styles.module.css'

export type BlogPostBodyProps = {
  content: Document
  links: BlogLinks
}

const customMarkdownOptions = (links: BlogLinks) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: NodeData) => {
      const id = node.data.target.sys.id
      const blocks = links.assets.block
      const asset = blocks?.find((node) => node.sys.id === id)

      return asset ? <Image {...asset} className="mx-auto" /> : null
    }
  }
})

export default function BlogPostBody({ content, links }: BlogPostBodyProps) {
  return (
    <div
      data-testid="blog-post-body"
      className="max-w-1xl mx-auto text-left lg:px-20 xl:px-20"
    >
      <div className={markdownStyles['markdown']}>
        {documentToReactComponents(content, customMarkdownOptions(links))}
      </div>
    </div>
  )
}

.markdown {
  @apply text-lg leading-relaxed;
}

.markdown a {
  color: blue;
}

.markdown a:hover {
  text-decoration: underline;
}

.markdown p,
.markdown ul,
.markdown ol,
.markdown blockquote {
  @apply my-6;
}

.markdown blockquote {
  @apply border-l-4 border-accent-2 pl-5;
}

.markdown h2 {
  @apply text-3xl mt-12 mb-4 leading-snug;
}

.markdown h3 {
  @apply text-2xl mt-8 mb-4 leading-snug;
}

.markdown h4 {
  @apply text-lg mt-4 mb-2 leading-snug;
}
*/
