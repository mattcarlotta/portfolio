import CardPreview from '~components/Layout/CardPreview'
import Flex from '~components/Layout/Flex'
import Head from '~components/Navigation/Header'
import { getHomepageCards } from '~utils/contentfulApi'
import REVALIDATE_TIME from '~utils/revalidate'
import type { CONTENTFUL_PAGE_CARD, GetStaticProps, ReactElement } from '~types'

const Home = ({
  cards
}: {
  cards: Array<CONTENTFUL_PAGE_CARD>
}): ReactElement => (
  <>
    <Head />
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
