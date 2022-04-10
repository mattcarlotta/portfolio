import clsx from 'clsx'
import ContentfulRichText from '~components/Layout/ContentfulRichText'
import DetailHeadline from '~components/Layout/DetailHeadline'
import Flex from '~components/Layout/Flex'
import Image from '~components/Layout/Image'
import Info from '~components/Layout/Info'
import Panel from '~components/Layout/Panel'
import PanelTitle from '~components/Layout/PanelTitle'
import Project from '~components/Layout/Project'
import SubTitle from '~components/Layout/SubTitle'
import GoBack from '~components/Navigation/GoBack'
import Head from '~components/Navigation/Header'
import OutsideLink from '~components/Navigation/OutsideLink'
import {
  AiFillStar,
  AiOutlineStar,
  FiPower,
  GiRank3,
  HiOutlineMail,
  RiMapPin2Line,
  SiCodesandbox,
  SiLinkedin,
  SiStackoverflow,
  VscGithub
} from '~icons'
import type { CONTENTFUL_BACKGROUND_PAGE } from '~types'
import { getBackground } from '~utils/contentfulApi'
import REVALIDATE_TIME from '~utils/revalidate'

const SocialLinks = [
  {
    Icon: VscGithub,
    id: 'github',
    title: 'Github',
    href: 'https://github.com/mattcarlotta'
  },
  {
    Icon: SiLinkedin,
    id: 'linkedin',
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/mattcarlotta'
  },
  {
    Icon: SiStackoverflow,
    id: 'stackoverflow',
    title: 'Stackoverflow',
    href: 'https://stackoverflow.com/users/7376526/matt-carlotta'
  },
  {
    Icon: SiCodesandbox,
    id: 'codesandbox',
    title: 'CodeSandBox',
    href: 'https://codesandbox.io/u/mattcarlotta/sandboxes'
  }
]

const iconClassName = 'mr-2 align-middle text-base'

export default function Background({
  background
}: {
  background: CONTENTFUL_BACKGROUND_PAGE
}) {
  return (
    <>
      <Head />
      <div className="mt-5 flex items-center justify-center rounded border border-primary-600 bg-primary-700 p-4">
        <Image
          {...background.profileImage}
          alt={background.profileImage.description}
          className="rounded"
        />
      </div>
      <Project>
        <PanelTitle id="background-title" data-testid="panel-title">
          {background.title}
        </PanelTitle>
        <Panel>
          <div className="px-4 pb-6 tracking-wide">
            <section>
              <DetailHeadline id="details">Details:</DetailHeadline>
              <div className="pl-3 font-plain text-tiny">
                <Info className="text-lime-500" dataTestId="status">
                  <FiPower className={iconClassName} />
                  Stacked in September 2016
                </Info>
                <Info dataTestId="location">
                  <RiMapPin2Line className={iconClassName} />
                  {background.location}
                </Info>
                <Info dataTestId="level">
                  <GiRank3 className={iconClassName} />
                  {background.rank}
                </Info>
                <Info dataTestId="source">
                  <HiOutlineMail className={iconClassName} />
                  <OutsideLink
                    dataTestId="send-email-link"
                    ariaLabel="Click to send me an email."
                    href="mailto:matt@mattcarlotta.com"
                  >
                    {background.email}
                  </OutsideLink>
                </Info>
                {SocialLinks.map(({ Icon, id, title, href }) => (
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
              <SubTitle data-testid="brief">
                <ContentfulRichText json={background.description.json} />
              </SubTitle>
            </section>
            <section>
              <DetailHeadline id="tech-specs">Tech Specs:</DetailHeadline>
              <ul data-testid="tech" className="list-none p-2">
                {background.tech.data.map(({ technology, level }, index) => (
                  <li key={technology}>
                    <div className="font-plain text-md leading-relaxed">
                      <Flex
                        breakpoint
                        width="100%"
                        flexwrap
                        style={{
                          background: index % 2 ? '#001031' : 'transparent',
                          padding: '0 10px'
                        }}
                      >
                        <Flex
                          breakpoint
                          as="p"
                          padding="0"
                          margin="0"
                          justify="flex-start"
                          width="50%"
                          style={{ color: '#0088ff' }}
                        >
                          {technology}
                        </Flex>
                        <Flex
                          as="p"
                          breakpoint
                          padding="0"
                          margin="0"
                          justify="flex-end"
                          width="50%"
                        >
                          {[
                            Array.from({ length: level }, (_, i) => (
                              <AiFillStar
                                key={`${technology}-${i}`}
                                className="mr-2 align-middle text-base text-primary-25"
                              />
                            ))
                          ]}
                          {5 - level > 0
                            ? Array.from({ length: 5 - level }, (_, i) => (
                                <AiOutlineStar
                                  key={`not-${technology}-${i}`}
                                  className="mr-2 align-middle text-base text-gray"
                                />
                              ))
                            : null}
                        </Flex>
                      </Flex>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <DetailHeadline id="formal-education">
                formal Education:
              </DetailHeadline>
              <p className="px-4 pt-2 font-plain text-md" data-testid="brief">
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
                    <div className="px-2.5 font-plain text-md leading-relaxed">
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

export async function getStaticProps() {
  const res = await getBackground()

  const background = res.data?.background

  if (!background) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      background,
      revalidate: REVALIDATE_TIME
    }
  }
}
