import CardPreview from '~components/Layout/CardPreview'
import Section from '~components/Layout/Section'
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
    <Section>
      <h1 className="font-stylized text-2xl leading-none md:text-3xl">
        <ImRocket className="mr-2.5 text-2xl" />
        Explorations
      </h1>
      <p className="mx-auto mt-2 max-w-2xl p-2 font-plain text-lg text-primary-25">
        A miscellaneous collection of works that vary from project-specific
        problem solving, to ground-up custom components, to answering
        stackoverflow questions.
      </p>
    </Section>
    <div
      className="mb-20 flex flex-wrap items-center justify-center"
      data-testid="home-page"
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
    </div>
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
