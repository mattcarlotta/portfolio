import {
  ImInfo,
  GiPlanetCore,
  GoHome,
  FaGithub,
  FiLinkedin,
  IoPlanet
} from '~icons'

export const HEADERLINKS = [
  {
    page: 'home',
    href: '/',
    Icon: GoHome
  },
  {
    page: 'projects',
    href: '/projects',
    Icon: IoPlanet
  },
  {
    page: 'explorations',
    href: '/explorations',
    Icon: GiPlanetCore
  },
  {
    page: 'background',
    href: '/background',
    Icon: ImInfo
  },
  {
    page: 'linkedIn',
    href: 'https://www.linkedin.com/in/mattcarlotta/',
    Icon: FiLinkedin,
    external: true
  },
  {
    page: 'github',
    href: 'https://github.com/mattcarlotta',
    Icon: FaGithub,
    external: true
  }
]

export default HEADERLINKS
