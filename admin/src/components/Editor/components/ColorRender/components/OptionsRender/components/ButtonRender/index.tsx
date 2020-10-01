import React from "react";
import {PropsState} from './Type';
import styles from "@/components/Editor/components/ColorRender/components/OptionsRender/index.less";

class ButtonRender extends React.Component<PropsState, any>
{
  constructor(props: PropsState) {
    super(props);
    this._mouseDown = this._mouseDown.bind(this);
  }

  private _mouseDown(e: any)
  {
    e.preventDefault();
    this.props.onChange(this.props.color);
  }

  render() {
    return (
      <div className={styles.itemWrapper}
           onMouseDown={this._mouseDown}
      >
        <div
          className={`${styles.itemRender} ${
          this.props.color == this.props.selectColor ? styles.itemRenderSelect : ''
        }`} style={{backgroundColor: this.props.color}}></div>
      </div>
    );
  }
}

export default ButtonRender;
