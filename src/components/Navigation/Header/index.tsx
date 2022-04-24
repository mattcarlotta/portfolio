import Head from 'next/head'
import { useRouter } from 'next/router'

export type HeaderProps = {
  description?: string
  title?: string
  type?: string
}

export default function Header({
  description = 'A fullstack developer who is passionate about open-source projects, helping the web development community, and building SEO optimized applications',
  title = '',
  type = 'website'
}: HeaderProps) {
  const { asPath } = useRouter()
  const newTitle = title
    .split(' ')
    .map((str) => str.charAt(0).toUpperCase().concat(str.slice(1)))
    .join(' ')
    .concat(` ${title && '-'} ${description} | Matt Carlotta`)
    .replace(/\./, '')
    .trim()
  return (
    <Head>
      <title data-testid="head-title">{newTitle}</title>
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="description" content={description} />
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_CLIENT}${asPath}`}
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={newTitle} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_CLIENT}${asPath}`}
      />
      <meta
        property="og:site_name"
        content="Matt Carlotta - Fullstack Software Engineer"
      />
      <meta property="og:updated_time" content={new Date().toLocaleString()} />
      <meta
        property="og:image"
        content="https://images.ctfassets.net/hb5otnhwin4m/5XlzNcNVgoachT9KBOv4TW/93e008136db547b48ce1dd4d8bfe5bf1/profile_300.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://images.ctfassets.net/hb5otnhwin4m/5XlzNcNVgoachT9KBOv4TW/93e008136db547b48ce1dd4d8bfe5bf1/profile_300.png"
      />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta
        property="og:image:alt"
        content="A fullstack developer who is passionate about open-source projects, helping the web development community, and building SEO optimized applications"
      />
      <meta property="og:image:type" content="image/png" />
      <link
        rel="mask-icon"
        href={`${process.env.NEXT_PUBLIC_CLIENT}/logo_192x192.png`}
        color="#01406C"
      />
    </Head>
  )
}
