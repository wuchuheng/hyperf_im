import React from "react";
import styles from "@/components/Editor/components/FontsizeRender/components/OptionsRender/index.less";
import {PropsState} from './Type';

class ButtonRender extends React.Component<PropsState, any>{
  constructor(props: PropsState) {
    super(props);
  }

  private _mouseDown(e: any): void
  {
    e.preventDefault();
    this.props.onChange(this.props.content);
  }

  render() {
    return (
      <div>
        <div
          className={`${styles.optionRender} ${
            this.props.hasSelectFontsize && this.props.hasSelectFontsize == this.props.content
              ? styles.optionSelect : ''}`}
          onMouseDown={this._mouseDown.bind(this)}
        >{this.props.content}</div>
      </div>
    );
  }
}

export default ButtonRender;
