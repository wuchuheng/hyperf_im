import React from "react";
import styles from "./index.less";
import {Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';

interface PropsState
{
  tip?: string
}
class LoadingSpinner extends React.Component<PropsState, any>
{

  state: {tip: string} = {
    tip: ''
  }

  constructor(props: PropsState) {
    super(props);
    this.state.tip = typeof(props.tip) === 'string' ? props.tip : '登录中...';
  }

  render() {
    const antIcon = <LoadingOutlined style={{ fontSize: 80 }} spin />;
    return (
      <>
        <div className={styles.spinWrapper}>
            <Spin tip={this.state.tip} indicator={antIcon} />
        </div>
      </>
    );
  }
}

export default LoadingSpinner;
