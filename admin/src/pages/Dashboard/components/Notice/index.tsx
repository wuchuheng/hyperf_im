import React from "react";
import { Card } from 'antd';
import  styles  from './index.less';
import {NoticeIcon} from "@/components/Icons";

class Notice extends React.Component<any, any>
{



  render() {
    return (
      <>
        <Card title={"公司公告"} >
          <div className={styles.nociceMainWrapper } >
            <div className={styles.centerWrapper}>
              <div className={styles.centerItem}>
                <NoticeIcon className={styles.noticeIcon} />
              </div>
              <div className={styles.centerItem}>
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
