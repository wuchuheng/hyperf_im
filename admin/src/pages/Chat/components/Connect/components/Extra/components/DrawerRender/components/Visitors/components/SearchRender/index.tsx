import React from "react";
import { Row, Col} from 'antd';
import AreaRender from "./components/AreaRender";
import DeviceSearchRender from "./components/DeviceSearchRender";
import ReferrerSearchRender from './components/ReferrerSearchRender';

class SearchRender extends React.Component<any, any>
{
  render() {
    return (
      <Row>
        <Col span={8}><AreaRender /></Col>
        <Col span={8}><DeviceSearchRender /></Col>
        <Col span={8}><ReferrerSearchRender /></Col>
      </Row>
    );
  }
}

export default SearchRender;
