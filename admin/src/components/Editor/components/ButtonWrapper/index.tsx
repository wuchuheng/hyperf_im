import React from "react";
import {Popover} from 'antd';
import styles from './index.less';
import {PropsState, PlacementType} from './Type';

class ButtonWrapper extends React.Component<PropsState, any>
{
  state: {placement: PlacementType};
  constructor(props: PropsState) {
    super(props);
    const placement = this.props.placement ? this.props.placement : 'bottom';
    this.state = {
      placement: placement
    }
    this._onMouseDown = this._onMouseDown.bind(this);
  }

  private _onMouseDown(e: any): void
  {
    e.preventDefault();
    this.props.onToggle(this.props.style);
  }

  render() {
    return (
      <Popover
        content={this.props.label}
        placement={this.state.placement}
      >
        <div
          className={`${styles.buttonWrapper}
           ${this.props.isActive ? styles.slected : ''}`}
          onMouseDown={this._onMouseDown}
        >
          {this.props.children}
        </div>
      </Popover>
    );
  }
}

export default ButtonWrapper;
