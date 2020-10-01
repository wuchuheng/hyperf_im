import React from "react";
import {Popover} from 'antd';
import styles from './index.less';
import {ClearIneIcon} from "@/components/Icons";
import {PropsState} from './Type';


class ClearRender extends React.Component<PropsState, any>
{
  constructor(props: PropsState) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  // 鼠标按下
  private _onChange(e: any): void
  {
    e.preventDefault();
    this.props.onChange();
  }

  render() {
    return (
      <Popover
        content={'清除'}
        placement={'bottom'}
      >
        <div
          onMouseDown={this._onChange}
          className={styles.clearRenderWrapper}
        >
          <ClearIneIcon />
        </div>
      </Popover>
    );
  }

}

export default ClearRender;
