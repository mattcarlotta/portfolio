/* istanbul ignore file */
import { GiPlanetCore, GiRingedPlanet, ImRocket, IoPlanet } from '~icons'

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
]

export default HEADERLINKS
