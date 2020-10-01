import React from "react";
import styles from './index.less';
import {PropsState} from './Type.';
import {Popover} from 'antd';

class BoldRender extends React.Component<PropsState, any>{

  constructor(props: PropsState)
  {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  private _onChange(e: any): void
  {
    e.preventDefault();
    this.props.onChange();
  }

  render()
  {
    return (
      <Popover
        content={'加粗'}
        placement={'bottom'}
      >
        <div
          className={`${styles.boldRenderWrapper} ${this.props.fontBold != '' ? ' ' + styles.active : ''}`
          }
          onMouseDown={this._onChange}
        >
          B
        </div>
      </Popover>
    );
  }
}

export default BoldRender;
