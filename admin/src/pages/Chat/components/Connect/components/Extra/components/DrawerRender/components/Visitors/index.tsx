import React from "react";
import {Row, Col} from 'antd';
import SearchRender from "./components/SearchRender";
import SubheaderRender from "./components/SubheaderRender";

class Visitors extends React.Component<any, any>
{
  render() {
    return (
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <SearchRender />
          </Col>
          <Col span={24}><SubheaderRender /></Col>
          <Col span={24}>1</Col>
        </Row>
    );
  }
}

export default Visitors;
