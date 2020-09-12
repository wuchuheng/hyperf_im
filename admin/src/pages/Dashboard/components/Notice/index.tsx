import React from "react";
import { Card, Empty } from 'antd';
import styles from './index.less';
import {NoticeIcon} from "@/components/Icons";

class Notice extends React.Component<any, any>
{



  render() {
    return (
      <>
        <Card title={"公司公告"} >
          <div className={styles.main}>
            <div className={styles.centerRender}>
              <div className={styles.item}>
                <NoticeIcon className={styles.iconRender}/>
              </div>
              <div className={styles.item}>
                暂无数据
              </div>
            </div>
          </div>
        </Card>
      </>
    );
  }
}


export default Notice;
