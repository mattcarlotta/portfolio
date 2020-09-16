import { createRef, PureComponent } from "react";
import { ClickHandlerProps } from "~types";

class ClickHandler extends PureComponent<ClickHandlerProps> {
  componentDidMount(): void {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount(): void {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  wrapperRef = createRef<HTMLDivElement>();

  handleClickOutside = (event: Event): void => {
    const { closeModal } = this.props;

    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target as Node) &&
      closeModal
    )
      closeModal();
  };

  render = (): JSX.Element => (
    <div ref={this.wrapperRef}>{this.props.children}</div>
  );
}

export default ClickHandler;
