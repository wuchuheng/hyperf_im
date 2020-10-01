import React from "react";
import styles from './index.less';

class BoldRender extends React.Component<any, any>{
  render() {
    return (
      <div className={styles.boldRenderWrapper} >
        B
      </div>
    );
  }
}

export default BoldRender;
