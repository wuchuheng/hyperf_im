import React from "react";
import styles from './index.less';
import {Row, Col} from 'antd';
import SearchRender from "./components/SearchRender";

class Visitors extends React.Component<any, any>
{
  render() {
    return (
      <div className={styles.mainRender}>
        <Row>
          <Col span={24}>
            <SearchRender />
          </Col>
          <Col span={24}>1</Col>
          <Col span={24}>1</Col>
        </Row>
      </div>
    );
  }
}

export default Visitors;
