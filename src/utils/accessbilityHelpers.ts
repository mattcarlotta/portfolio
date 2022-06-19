import type { AccessibleElement } from '~types'

export const ACCESSIBLE_ELEMENTS = [
  'a[href]',
  'button:not(:disabled)',
  '[tabindex]'
]

export function isFocusable(element: AccessibleElement) {
  const { disabled, href, nodeName, rel, type, tabIndex } = element

  if (typeof tabIndex === 'number') return tabIndex >= 0
  if (disabled) return false

  switch (nodeName) {
    case 'A':
      return !!href && rel !== 'ignore'
    case 'INPUT':
      return type !== 'hidden'
    case 'BUTTON':
      return true
    default:
      return false
  }
}
