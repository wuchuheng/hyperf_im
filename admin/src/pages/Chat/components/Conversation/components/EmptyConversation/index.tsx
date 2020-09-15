import React from "react";
import styles from './index.less';
import {EmptyConversationsIcon} from "@/components/Icons";

class EmptyConversation extends React.Component<any, any>
{
  render() {
    return (
      <>
        <div className={styles.mainWrapper}>
          <div className={styles.iconWrapper}><EmptyConversationsIcon/></div>
          <div className={styles.titleWrapper}>无选中对话</div>
          <div className={styles.sloganWrapper}>没有需要处理的对话，休息一下吧！</div>
        </div>
      </>
    );
  }
}

export default EmptyConversation;
