import React from "react";
import styles from './index.less';
import ConnectList from "./components/ConnectList";

class Own extends React.Component<any, any>
{
  render() {
    return (
        <div className={styles.ownWrapper}>
          <div className={styles.body}>
            <ConnectList />
          </div>
          <div className={styles.footWrapper}>
            <div className={styles.footRender}>
              当前已接待 0 上限量 2
            </div>
          </div>
        </div>
    );
  }
}

export default Own;
