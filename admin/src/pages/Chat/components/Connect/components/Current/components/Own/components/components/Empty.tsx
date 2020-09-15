import React from "react";
import styles from './index.less';
import {MessagesForEmptyIcon} from "@/components/Icons";

class Empty extends React.Component<any, any>
{
  render() {
    return (
      <>
        <div className={styles.emptyWrapper}>
          <div  className={styles.iconRender}>
            <MessagesForEmptyIcon />
          </div>
          <div className={styles.noticRender}>
            暂无消息
          </div>
        </div>
      </>
    )
  }
}

export default Empty;
