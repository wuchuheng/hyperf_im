import React from "react";
import {Row, Col, Button} from 'antd';
import styles from './index.less';

class SubheaderRender extends React.Component<any, any>
{
  render() {
    return (
      <Row gutter={[0, 16]}>
        <Col span={4}>
          <div className={styles.leftWrapper}>
            <div>在线访客人数：0</div>
          </div>
        </Col>
        <Col span={4} offset={16}>
          <Row justify={'end'}>
              <Button>导出数据</Button>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default SubheaderRender;
