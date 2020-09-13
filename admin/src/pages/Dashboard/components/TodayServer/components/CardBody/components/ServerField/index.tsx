import React from "react";
import {ServerFielDPropsState} from "./Type";
import styles from './index.less';

class ServerField extends React.Component<ServerFielDPropsState, any>
{
  constructor(props: ServerFielDPropsState) {
    super(props);
  }

  render() {
    return (
        <div className={styles.main}>
          <img src={this.props.avator} />
          <div>{this.props.nickname}</div>
        </div>
    );
  }
}

export default ServerField;
