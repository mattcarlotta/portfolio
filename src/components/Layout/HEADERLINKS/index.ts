import { GiPlanetCore, GiRingedPlanet, ImRocket, IoPlanet } from '~icons'

/* istanbul ignore file */
export const HEADERLINKS = [
  {
    page: 'home',
    href: '/',
    Icon: GiRingedPlanet
  },
  {
    page: 'projects',
    href: '/projects',
    Icon: IoPlanet
  },
  {
    page: 'explorations',
    href: '/explorations',
    Icon: ImRocket
  },
  {
    page: 'background',
    href: '/background',
    Icon: GiPlanetCore
  }
  // {
  //   page: 'linkedIn',
  //   href: 'https://www.linkedin.com/in/mattcarlotta/',
  //   external: true
  // },
  // {
  //   page: 'github',
  //   href: 'https://github.com/mattcarlotta',
  //   external: true
  // }
]

export default HEADERLINKS
