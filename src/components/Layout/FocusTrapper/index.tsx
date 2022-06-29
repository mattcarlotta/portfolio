import { Component, createRef } from 'react'
import { AccessibleElement, KeyboardEvent, MouseEvent, ReactNode } from '~types'
import { ACCESSIBLE_ELEMENTS, isFocusable } from '~utils/accessbilityHelpers'
import clsx from '~utils/clsx'

export type FocusTrapperState = {
  tabIndex: number
}

export type FocusTrapperProps = {
  children: ReactNode
  className?: string
  onEscapePress: () => void
}

export default class FocusTrapper extends Component<
  FocusTrapperProps,
  FocusTrapperState
> {
  state = {
    tabIndex: -1
  }

  lastActiveElement = document.activeElement as HTMLElement

  focusTrapRef = createRef<HTMLDivElement>()

  tabbableItems = [] as Array<HTMLElement>

  componentDidMount() {
    if (this.focusTrapRef.current) {
      const tabbableItems = Array.from(
        this.focusTrapRef.current.querySelectorAll(
          ACCESSIBLE_ELEMENTS.join(',')
        )
      ).filter((element) => isFocusable(element as AccessibleElement))

      this.tabbableItems = tabbableItems as Array<HTMLElement>
      this.setState({ tabIndex: tabbableItems.length > 0 ? 0 : -1 })
    }
  }

  componentDidUpdate(
    _prevProps: FocusTrapperProps,
    prevState: FocusTrapperState
  ) {
    const { tabIndex } = this.state
    if (tabIndex !== prevState.tabIndex && this.tabbableItems.length > 0) {
      this.tabbableItems[tabIndex]?.focus()
    }
  }

  componentWillUnmount() {
    this.lastActiveElement.focus()
  }

  handleClick = (event: MouseEvent<HTMLElement>) => {
    const tabbableItemIndex = this.tabbableItems.findIndex((node) =>
      node.isEqualNode(event.target as HTMLElement)
    )

    this.setState({ tabIndex: tabbableItemIndex >= 0 ? tabbableItemIndex : 0 })
  }

  handleFocusTrap = (event: KeyboardEvent<HTMLElement>) => {
    const { onEscapePress } = this.props
    const { key, shiftKey } = event
    const tabPress = key === 'Tab'
    const escKey = key === 'Escape' || key === 'Esc'
    const tabItemsLength = this.tabbableItems.length - 1

    if (shiftKey && tabPress) {
      event.preventDefault()
      this.setState((prevState) => ({
        tabIndex:
          prevState.tabIndex - 1 < 0 ? tabItemsLength : prevState.tabIndex - 1
      }))
    } else if (tabPress) {
      event.preventDefault()
      this.setState((prevState) => ({
        tabIndex:
          prevState.tabIndex + 1 > tabItemsLength ? 0 : prevState.tabIndex + 1
      }))
    } else if (escKey) {
      event.stopPropagation()
      onEscapePress()
    }
  }

  render() {
    const { children, className } = this.props
    return (
      <div
        role="presentation"
        className={clsx(className)}
        ref={this.focusTrapRef}
        onKeyDown={this.handleFocusTrap}
        onClick={this.handleClick}
      >
        {children}
      </div>
    )
  }
}
