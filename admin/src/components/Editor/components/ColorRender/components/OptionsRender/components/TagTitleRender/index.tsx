import React from "react";
import {PropsState} from './Type';

class TagTitleRender extends React.Component<PropsState, any>
{
  constructor(props: PropsState) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  private _onChange(e: any): void
  {
    e.preventDefault();
    this.props.onChange(this.props.currentKey);
  }

  render() {
    return (
      <>
        <span
          onMouseDown={this._onChange}
        >
        {this.props.title}
        </span>
      </>
    );
  }
}

export default TagTitleRender;
