import React from "react";
import { Card, Empty } from 'antd';
import styles from './index.less';

class Notice extends React.Component<any, any>
{



  render() {
    return (
      <>
        <Card title={"公司公告"} >
          <Empty description={'暂无数据'} className={styles.main}/>
        </Card>
      </>
    );
  }
}


export default Notice;
