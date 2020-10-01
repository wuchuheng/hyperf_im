import React from "react";
import {Popover} from 'antd';
import styles from './index.less';
import {ItalicIcon} from "@/components/Icons";
import {PropsState} from './Type';

class ItalicRender extends React.Component<PropsState, any>
{
  constructor(props: PropsState) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  private _onChange(e: any)
  {
    e.preventDefault();
    this.props.onChange();
  }

  render() {
    return (
      <>
        <Popover
          content={'斜体'}
          placement={'bottom'}
        >
          <div className={`
          ${styles.ItalicRenderWrapper}
          ${this.props.italic != '' ? styles.selected : ''}`}
               onMouseDown={this._onChange}
          >
            <ItalicIcon />
          </div>
        </Popover>
      </>
    );
  }
}

export default ItalicRender;
