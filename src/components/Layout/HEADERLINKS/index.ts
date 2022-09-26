/* istanbul ignore file */
import BackgroundIcon from '~icons/BackgroundIcon'
import ExplorationIcon from '~icons/ExplorationsIcon'
import HomeIcon from '~icons/HomeIcon'
import ProjectsIcon from '~icons/ProjectsIcon'

export const HEADERLINKS = [
  {
    page: 'home',
    href: '/',
    Icon: HomeIcon
  },
  {
    page: 'projects',
    href: '/projects/',
    Icon: ProjectsIcon
  },
  {
    page: 'explorations',
    href: '/explorations/',
    Icon: ExplorationIcon
  },
  {
    page: 'background',
    href: '/background/',
    Icon: BackgroundIcon
  }
]

export default HEADERLINKS
