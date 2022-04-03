import { render } from '@testing-library/react'
import CardPreview from '../index'

const initProps = {
  active: true,
  ariaLabel: '',
  status: 'Archived',
  location: 'https://github.com/mattcarlotta/nextjs-ssr-kit',
  source: 'https://github.com/mattcarlotta/nextjs-ssr-kit',
  description:
    'A fully-loaded, built from the ground up, NextJS boilerplate for server-side solutions.',
  url: 'https://images.ctfassets.net/hb5otnhwin4m/1hKVGDEuKXA82elw5sYYk1/a44befed988a8c66025a85416c2b8479/nextssrkitPreview.png',
  contentType: 'image/png',
  height: 200,
  width: 243,
  title: 'next ssr kit preview',
  href: 'projects',
  slug: 'nextjs-ssr-kit',
  showInfo: true
}

const nextProps = {
  active: false,
  ariaLabel: '',
  status: 'Archived',
  location: 'https://github.com/mattcarlotta/nextjs-ssr-kit',
  source: 'https://github.com/mattcarlotta/nextjs-ssr-kit',
  description: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          content: [
            {
              nodeType: 'text',
              value:
                'An application to consolidate google forms, excel, and manual user-generated monthly PDFs into a single, unified, semi-automated month-to-month scheduling service for 25+ members of the San Jose Sharks Ice Team.',
              marks: [],
              data: {}
            }
          ],
          data: {}
        }
      ]
    }
  },

  url: 'https://images.ctfassets.net/hb5otnhwin4m/1hKVGDEuKXA82elw5sYYk1/a44befed988a8c66025a85416c2b8479/nextssrkitPreview.png',
  contentType: 'image/png',
  height: 200,
  width: 243,
  title: 'next ssr kit preview',
  href: 'projects'
}

describe('Image', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<CardPreview {...initProps} />)
    expect(getByTestId('picture')).toBeInTheDocument()
  })

  it('renders inactive projects', () => {
    const { getByTestId } = render(<CardPreview {...nextProps} />)
    expect(getByTestId('fipower')).toHaveStyle('color:yellow')
  })
})
