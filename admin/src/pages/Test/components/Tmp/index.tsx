import React from "react";
import Editor from "@/components/Editor";
import styles from './index.less';

class Tmp extends React.Component<any, any>
{
  render() {
    return (
      <div className={styles.tmpWrapper}>
        <Editor />
      </div>
    );
  }
}

export default Tmp;
