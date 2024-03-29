import BackgroundTechList from '~components/Layout/BackgroundTechList'
import ContentfulRichText from '~components/Layout/ContentfulRichText'
import DetailHeadline from '~components/Layout/DetailHeadline'
import Image from '~components/Layout/Image'
import Info from '~components/Layout/Info'
import Panel from '~components/Layout/Panel'
import PanelTitle from '~components/Layout/PanelTitle'
import Project from '~components/Layout/Project'
import GoBack from '~components/Navigation/GoBack'
import Head from '~components/Navigation/Header'
import OutsideLink from '~components/Navigation/OutsideLink'
import CodesandboxIcon from '~icons/CodesandboxIcon'
import GithubIcon from '~icons/GithubIcon'
import LinkedinIcon from '~icons/LinkedinIcon'
import LocationIcon from '~icons/LocationIcon'
import MailIcon from '~icons/MailIcon'
import RankIcon from '~icons/RankIcon'
import StackOverflowIcon from '~icons/StackOverflowIcon'
import StatusIcon from '~icons/StatusIcon'
import type { CONTENTFUL_BACKGROUND_PAGE, InferNextProps } from '~types'
import clsx from '~utils/clsx'
import { getBackground } from '~utils/contentfulApi'
import REVALIDATE_TIME from '~utils/revalidate'

export async function getStaticProps() {
  const res = await getBackground()

  const background: CONTENTFUL_BACKGROUND_PAGE = res.data?.background

  if (!background) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      background
    },
    revalidate: REVALIDATE_TIME
  }
}

const SOCIALLINKS = [
  {
    Icon: GithubIcon,
    id: 'github',
    title: 'Github',
    href: 'https://github.com/mattcarlotta/'
  },
  {
    Icon: LinkedinIcon,
    id: 'linkedin',
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/mattcarlotta/'
  },
  {
    Icon: StackOverflowIcon,
    id: 'stackoverflow',
    title: 'Stackoverflow',
    href: 'https://stackoverflow.com/users/7376526/matt-carlotta/'
  },
  {
    Icon: CodesandboxIcon,
    id: 'codesandbox',
    title: 'CodeSandBox',
    href: 'https://codesandbox.io/u/mattcarlotta/sandboxes/'
  }
]

const iconClassName = 'mr-2 align-middle text-xl'

export default function Background({
  background
}: InferNextProps<typeof getStaticProps>) {
  return (
    <>
      <Head
        type="article"
        title="Background"
        description="Learn about my journey on how I became a fullstack software engineer"
      />
      <Project>
        <PanelTitle id="background-title" data-testid="panel-title">
          {background.title}
        </PanelTitle>
        <Panel>
          <div className="p-5 tracking-wide">
            <section>
              <div className="mt-2 flex flex-col items-center justify-center overflow-hidden rounded border border-solid border-primary-600 bg-primary-700 py-4">
                <Image
                  priority
                  className="rounded"
                  {...background.profileImage}
                  alt={background.profileImage.description}
                  height={150}
                  width={150}
                />
              </div>
              <DetailHeadline id="details">Details:</DetailHeadline>
              <div className="pl-3 font-plain text-md">
                <Info className="text-lime-500" dataTestId="status">
                  <StatusIcon className={iconClassName} />
                  In Orbit Circa September 2016
                </Info>
                <Info dataTestId="location">
                  <LocationIcon className={iconClassName} />
                  {background.location}
                </Info>
                <Info dataTestId="level">
                  <RankIcon className={iconClassName} />
                  {background.rank}
                </Info>
                <Info dataTestId="source">
                  <MailIcon className={iconClassName} />
                  <OutsideLink
                    dataTestId="send-email-link"
                    ariaLabel="Click to send me an email."
                    href="mailto:matt@mattcarlotta.com"
                  >
                    {background.email}
                  </OutsideLink>
                </Info>
                {SOCIALLINKS.map(({ Icon, id, title, href }) => (
                  <Info dataTestId={title} key={id}>
                    <Icon className={iconClassName} />
                    <OutsideLink
                      dataTestId={`my-${id}-page`}
                      ariaLabel={`Navigate to my ${id} page`}
                      href={href}
                      showIcon
                    >
                      {title}
                    </OutsideLink>
                  </Info>
                ))}
              </div>
            </section>
            <section>
              <DetailHeadline id="brief">Brief:</DetailHeadline>
              <div
                className="pl-4 font-plain text-xl tracking-wide"
                data-testid="brief"
              >
                <ContentfulRichText json={background.description.json} />
              </div>
            </section>
            <section>
              <DetailHeadline id="tech-specs">Tech Specs:</DetailHeadline>
              <BackgroundTechList tech={background.tech} />
            </section>
            <section>
              <DetailHeadline id="formal-education">Education:</DetailHeadline>
              <p className="px-4 pt-2 font-plain text-xl" data-testid="brief">
                San Jose State University | 2005-2012 | 3.5GPA
              </p>
            </section>
            <section>
              <DetailHeadline id="online-education">
                Online Education:
              </DetailHeadline>
              <ul data-testid="re-education" className="list-none px-2">
                {background.education.data.map(({ title, url }, index) => (
                  <li
                    className={clsx(
                      index % 2 ? 'bg-primary-900' : 'bg-transparent'
                    )}
                    key={title}
                  >
                    <div className="px-2.5 font-plain text-xl leading-relaxed">
                      <OutsideLink
                        ariaLabel={`Navigate to ${title}`}
                        href={url}
                        showIcon
                      >
                        {title}
                      </OutsideLink>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </Panel>
      </Project>
      <GoBack href="/" title="Home" />
    </>
  )
}
