import CardPreview from '~components/Layout/CardPreview'
import Flex from '~components/Layout/Flex'
import Orbits from '~components/Layout/Orbits'
import Head from '~components/Navigation/Header'
import type { CONTENTFUL_PAGE_CARD, GetStaticProps, ReactElement } from '~types'
import { getHomepageCards } from '~utils/contentfulApi'
import REVALIDATE_TIME from '~utils/revalidate'

const Home = ({
  cards
}: {
  cards: Array<CONTENTFUL_PAGE_CARD>
}): ReactElement => (
  <>
    <Head />
    <header className="mb-[8rem] mt-[-0.5rem] text-center" data-testid="header">
      <h1
        style={{ textShadow: '0px 0px 3px #fff' }}
        className="text-md m-0 uppercase leading-none tracking-wider sm:text-4xl"
      >
        MATT CARLOTTA
      </h1>
      <h2 className="m-0 p-0 text-[0.8rem] text-white">
        Fullstack Software Engineer
      </h2>
      <Orbits />
    </header>
    <Flex data-testid="home-page" margin="75px 0 0 0" justify="center" flexwrap>
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
    </Flex>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
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

export default Home
