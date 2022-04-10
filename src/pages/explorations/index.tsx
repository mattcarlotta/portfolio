import CardPreview from '~components/Layout/CardPreview'
import Flex from '~components/Layout/Flex'
import Head from '~components/Navigation/Header'
import { ImRocket } from '~icons'
import type { CONTENTFUL_EXPLORATIONS_PAGE, GetStaticProps } from '~types'
import { getAllExplorations } from '~utils/contentfulApi'
import REVALIDATE_TIME from '~utils/revalidate'

const ExplorationsPage = ({
  explorations
}: {
  explorations: Array<CONTENTFUL_EXPLORATIONS_PAGE>
}) => (
  <>
    <Head description="A small collection of codesandbox explorations I've created over the years" />
    <section className="mt-2 mb-10 rounded border border-primary-600 bg-primary-700 p-4">
      <header>
        <h1 className="text-center font-stylized text-lg leading-none md:text-2xl">
          <ImRocket className="mr-2.5 text-lg" />
          Explorations
        </h1>
      </header>
      <p className="mx-auto max-w-xl p-2 text-center font-plain text-primary-25">
        A miscellaneous collection of works that vary from project-specific
        problem solving, to ground-up custom components, to answering
        stackoverflow questions.
      </p>
    </section>
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
