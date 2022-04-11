import { render } from '@testing-library/react'
import type { Document } from '~types'
import ContentfulRichText from '../index'

const json = {
  nodeType: 'document',
  data: {},
  content: [
    {
      nodeType: 'paragraph',
      content: [
        {
          nodeType: 'text',
          value:
            "The apps I build are test-driven, data-driven, cross-platform, and production-ready. I also deploy and maintain them on remote headless Linux servers. Lastly, and most importantly, I'm a huge proponent for building web accessible applications. I aim to create applications that adhere to the ",
          marks: [],
          data: {}
        },
        {
          nodeType: 'hyperlink',
          content: [
            {
              nodeType: 'text',
              value: 'Web Content Accessibility Guidelines (WCAG)',
              marks: [],
              data: {}
            }
          ],
          data: {
            uri: 'https://www.w3.org/WAI/standards-guidelines/wcag'
          }
        },
        {
          nodeType: 'text',
          value: ' AA/AAA standards.',
          marks: [],
          data: {}
        }
      ],
      data: {}
    }
  ]
} as Document

describe('ContentfulRichText', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<ContentfulRichText json={json} />)
    expect(getByTestId('contentful-body')).toBeInTheDocument()
  })
})
