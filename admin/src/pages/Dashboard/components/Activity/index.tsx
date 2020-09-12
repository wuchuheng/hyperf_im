import React from "react";
import { Card, Tooltip, Row, Col } from 'antd';

import styles from './index.less';


class Activity extends React.Component<any, any>
{
  render() {
    const text  = '本期更新8个功能点：对话页新增历史模块、消息通知优化、聊天窗口支持嵌入iframe13 1431312312312321';
    const items = [0, 1, 2, 3].map((v, i) => {
      return (
        <Col span={24} key={i}>
          <div className={styles.itemRender}>
            <Tooltip placement="top" title={text} color={'light'}>
              <div className={styles.itemTitle}>
                {text}
              </div>
            </Tooltip>
            <div className={styles.itemBottomWrapper}>
              <div className={styles.itemDate}>
                2020-08-18
              </div>
              <div className={styles.detailLink}>
                <a>详情</a>
              </div>
            </div>
          </div>
        </Col>
      );
    })
    return (
    <Card title={'千里动态'} className={styles.main}>
          <Row gutter={[0, 7]}>
            {items}
          </Row>
        </Card>
    );
  }
}
export default Activity;
