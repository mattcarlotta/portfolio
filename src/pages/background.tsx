import { css } from '@emotion/react'
import {
  CodeSquare,
  Github,
  Linkedin,
  StackOverflow
} from 'react-bootstrap-icons'
import ContentfulRichText from '~components/Layout/ContentfulRichText'
import DetailHeadline from '~components/Layout/DetailHeadline'
import Flex from '~components/Layout/Flex'
import Image from '~components/Layout/Image'
import Info from '~components/Layout/Info'
import NormalText from '~components/Layout/NormalText'
import Panel from '~components/Layout/Panel'
import PanelTitle from '~components/Layout/PanelTitle'
import Project from '~components/Layout/Project'
import SubTitle from '~components/Layout/SubTitle'
import Head from '~components/Navigation/Header'
import OutsideLink from '~components/Navigation/OutsideLink'
import {
  AiFillStar,
  AiOutlineStar,
  FiPower,
  GiRank3,
  HiOutlineMail,
  RiMapPin2Line
} from '~icons'
import type {
  CONTENTFUL_BACKGROUND_PAGE,
  CSSProperties,
  GetStaticProps,
  ReactElement
} from '~types'
import { getBackground } from '~utils/contentfulApi'
import REVALIDATE_TIME from '~utils/revalidate'

const style = {
  fontSize: 20,
  verticalAlign: 'middle',
  marginRight: 10
} as CSSProperties

const Background = ({
  background
}: {
  background: CONTENTFUL_BACKGROUND_PAGE
}): ReactElement => (
  <>
    <Head />
    <Project>
      <header>
        <PanelTitle data-testid="panel-title">{background.title}</PanelTitle>
      </header>
      <Panel>
        <div className="mt-6 flex items-center justify-center">
          <Image
            priority
            {...background.profileImage}
            alt={background.profileImage.description}
            styles="border-radius: 10px;"
          />
        </div>
        <div className="px-4 pt-2 pb-6 tracking-wide">
          <section>
            <header>
              <DetailHeadline margin="20px 0 0 0">Details:</DetailHeadline>
            </header>
            <NormalText margin="15px 0 0 15px" fontSize="16px">
              <Info data-testid="status">
                <FiPower style={{ color: 'limegreen', ...style }} />
                Activated in September 2016
              </Info>
              <Info data-testid="location">
                <RiMapPin2Line style={style} />
                {background.location}
              </Info>
              <Info data-testid="level">
                <GiRank3 style={style} />
                {background.rank}
              </Info>
              <Info data-testid="source">
                <HiOutlineMail style={style} />
                <OutsideLink
                  dataTestId="send-email-link"
                  ariaLabel="Click to send me an email."
                  href="mailto:matt@mattcarlotta.com"
                >
                  {background.email}
                </OutsideLink>
              </Info>
              <Info>
                <Github className="mr-2" />
                <OutsideLink
                  dataTestId="my-github-page"
                  ariaLabel="Navigate to my github page."
                  href="https://github.com/mattcarlotta"
                  showIcon
                >
                  Github
                </OutsideLink>
              </Info>
              <Info>
                <Linkedin className="mr-2" />
                <OutsideLink
                  dataTestId="my-linkedin-page"
                  ariaLabel="Navigate to my linkedin page."
                  href="https://www.linkedin.com/in/mattcarlotta"
                  showIcon
                >
                  Linkedin
                </OutsideLink>
              </Info>
              <Info>
                <CodeSquare className="mr-2" />
                <OutsideLink
                  dataTestId="my-codesandbox-page"
                  ariaLabel="Navigate to my codesandbox page."
                  href="https://codesandbox.io/u/mattcarlotta/sandboxes"
                  showIcon
                >
                  CodeSandBox
                </OutsideLink>
              </Info>
              <Info>
                <StackOverflow className="mr-2" />
                <OutsideLink
                  dataTestId="my-stackoverflow-page"
                  ariaLabel="Navigate to my stackoverflow page."
                  href="https://stackoverflow.com/users/7376526/matt-carlotta"
                  showIcon
                >
                  Stackoverflow
                </OutsideLink>
              </Info>
            </NormalText>
          </section>
          <section>
            <header>
              <DetailHeadline>Brief:</DetailHeadline>
            </header>
            <SubTitle data-testid="brief">
              <ContentfulRichText json={background.description.json} />
            </SubTitle>
          </section>
          <section>
            <header>
              <DetailHeadline>Tech Specs:</DetailHeadline>
            </header>
            <ul
              data-testid="tech"
              css={css`
                list-style-type: none;
                padding: 0 10px;
              `}
            >
              {background.tech.data.map(({ technology, level }, index) => (
                <li key={technology}>
                  <NormalText fontSize="20px">
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
                              style={{
                                verticalAlign: 'middle',
                                color: '#0088ff',
                                ...style
                              }}
                            />
                          ))
                        ]}
                        {5 - level > 0
                          ? Array.from({ length: 5 - level }, (_, i) => (
                              <AiOutlineStar
                                key={`not-${technology}-${i}`}
                                style={{
                                  verticalAlign: 'middle',
                                  color: '#4a4a4a',
                                  ...style
                                }}
                              />
                            ))
                          : null}
                      </Flex>
                    </Flex>
                  </NormalText>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <header>
              <DetailHeadline>formal Education:</DetailHeadline>
            </header>
            <SubTitle as="p" data-testid="brief">
              San Jose State University | 2005-2012 | 3.5GPA
            </SubTitle>
          </section>
          <section>
            <DetailHeadline>Online Education:</DetailHeadline>
            <ul
              data-testid="re-education"
              css={css`
                list-style-type: none;
                padding: 0 10px;
              `}
            >
              {background.education.data.map(({ title, url }, index) => (
                <li
                  style={{ background: index % 2 ? '#001031' : 'transparent' }}
                  key={title}
                >
                  <NormalText style={{ padding: '0 10px' }} fontSize="20px">
                    <OutsideLink
                      ariaLabel={`Navigate to ${title}`}
                      href={url}
                      showIcon
                    >
                      {title}
                    </OutsideLink>
                  </NormalText>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Panel>
    </Project>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
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

export default Background
