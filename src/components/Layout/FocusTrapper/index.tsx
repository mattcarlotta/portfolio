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
      this.setState({ tabIndex: 0 })
    }
  }

  componentDidUpdate(
    _prevProps: FocusTrapperProps,
    prevState: FocusTrapperState
  ) {
    if (
      this.state.tabIndex !== prevState.tabIndex &&
      this.tabbableItems.length > 0
    ) {
      this.tabbableItems[this.state.tabIndex]?.focus()
    }
  }

  componentWillUnmount() {
    this.lastActiveElement.focus()
  }

  handleOutsideClick = (event: MouseEvent<HTMLDivElement>) => {
    const tabbableItemIndex = this.tabbableItems.findIndex((node) =>
      node.isEqualNode(event.target as HTMLElement)
    )

    this.setState({ tabIndex: tabbableItemIndex >= 0 ? tabbableItemIndex : 0 })
  }

  handleFocusTrap = (event: KeyboardEvent<HTMLDivElement>) => {
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
      this.props.onEscapePress?.()
    }
  }

  render() {
    return (
      <div
        role="presentation"
        className={clsx(this.props.className)}
        ref={this.focusTrapRef}
        onKeyDown={this.handleFocusTrap}
        onMouseDown={this.handleOutsideClick}
      >
        {this.props.children}
      </div>
    )
  }
}
