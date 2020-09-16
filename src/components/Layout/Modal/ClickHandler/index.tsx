import { createRef, PureComponent } from "react";
import { ClickHandlerProps } from "~types";

class ClickHandler extends PureComponent<ClickHandlerProps> {
  wrapperRef = createRef<HTMLDivElement>();

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event: Event) => {
    const { closeModal } = this.props;

    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target as Node) &&
      closeModal
    )
      closeModal();
  };

  render = () => <div ref={this.wrapperRef}>{this.props.children}</div>;
}

export default ClickHandler;
