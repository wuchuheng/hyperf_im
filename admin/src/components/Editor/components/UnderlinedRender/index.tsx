import React from "react";
import {UnderlIneIcon} from "@/components/Icons";
import styles from './index.less';
import {PropsState} from './Type';
import {Popover} from 'antd';

class UnderLineRender extends React.Component<PropsState, any>
{
  constructor(props: PropsState) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  private _onChange(e: any): void
  {
    e.preventDefault();
    this.props.onChange();
  }

  render() {
    return (
      <Popover
        placement={'bottom'}
        content={'下划线'}
      >
        <div
          className={`${styles.underlineWrapper}
         ${this.props.underline != ''?  styles.select : ''}`}
          onMouseDown={this._onChange}
        >
          <UnderlIneIcon />
        </div>
      </Popover>
    );
  }
}

export default UnderLineRender;
