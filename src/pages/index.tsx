import CardPreview from '~components/Layout/CardPreview'
import Orbits from '~components/Layout/Orbits'
import Section from '~components/Layout/Section'
import Head from '~components/Navigation/Header'
import type { CONTENTFUL_PAGE_CARD } from '~types'
import { getHomepageCards } from '~utils/contentfulApi'
import REVALIDATE_TIME from '~utils/revalidate'

export default function Home({
  cards
}: {
  cards: Array<CONTENTFUL_PAGE_CARD>
}) {
  return (
    <>
      <Head />
      <Section>
        <h1
          style={{ textShadow: 'rgb(119, 110, 183) 0px 0px 3px' }}
          className="m-0 text-4xl uppercase leading-none tracking-wider text-white"
        >
          MATT CARLOTTA
        </h1>
        <h2
          style={{ textShadow: 'rgb(119, 110, 183) 0px 0px 1px' }}
          className="m-0 p-0 text-tiny text-primary"
        >
          Fullstack Software Engineer
        </h2>
        <Orbits />
      </Section>
      <div
        className="mt-20 flex flex-wrap items-center justify-center"
        data-testid="home-page"
      >
        {cards.map(({ sys, preview, slug, ...rest }) => (
          <CardPreview
            {...preview}
            {...rest}
            key={sys.id}
            ariaLabel={`Navigate to my ${slug} page`}
            href={slug}
            showInfo={false}
            alt={preview.description}
          />
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await getHomepageCards()

  const cards = res.data?.homepageCardCollection?.items

  if (!cards) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      cards,
      revalidate: REVALIDATE_TIME
    }
  }
}
