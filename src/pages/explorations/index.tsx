import CardPreview from '~components/Layout/CardPreview'
import Category from '~components/Layout/Category'
import CategoryDescription from '~components/Layout/CategoryDescription'
import Flex from '~components/Layout/Flex'
import Head from '~components/Navigation/Header'
import { GiPlanetCore } from '~icons'
import type {
  CONTENTFUL_EXPLORATIONS_PAGE,
  GetStaticProps,
  ReactElement
} from '~types'
import { getAllExplorations } from '~utils/contentfulApi'
import REVALIDATE_TIME from '~utils/revalidate'

const ExplorationsPage = ({
  explorations
}: {
  explorations: Array<CONTENTFUL_EXPLORATIONS_PAGE>
}): ReactElement => (
  <>
    <Head description="A small collection of codesandbox explorations I've created over the years" />
    <Category>
      <GiPlanetCore style={{ fontSize: 22, marginRight: 10 }} />
      Explorations
    </Category>
    <CategoryDescription>
      A miscellaneous collection of explorations that vary from project-specific
      problem solving, to ground-up custom components, to answering
      stackoverflow questions.
    </CategoryDescription>
    <Flex
      data-testid="home-page"
      justify="center"
      flexwrap
      margin="0 0 200px 0"
    >
      {explorations.map(({ sys, title, sandboxId, preview, ...rest }) => (
        <CardPreview
          {...preview}
          {...rest}
          active
          key={sys.id}
          location={`https://${sandboxId}.csb.app`}
          ariaLabel={`Navigate to my ${title} exploration page`}
          href="explorations"
          source={`https://codesandbox.io/s/${sandboxId}`}
          status="In Orbit"
          alt={preview.description}
        />
      ))}
    </Flex>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const res = await getAllExplorations()

  const explorations = res.data?.explorationsCollection?.items

  if (!explorations) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      explorations,
      revalidate: REVALIDATE_TIME
    }
  }
}

export default ExplorationsPage
