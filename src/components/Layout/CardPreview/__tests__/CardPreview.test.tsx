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
  slug: 'nextjs-ssr-kit'
}

describe('Image', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<CardPreview {...initProps} />)
    expect(getByTestId('picture')).toBeInTheDocument()
  })
})
