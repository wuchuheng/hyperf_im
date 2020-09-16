import React from "react";
import {Form, Input, Cascader, TreeSelect, Row, Col} from 'antd';
const { SHOW_PARENT } = TreeSelect;
import AreaRender from "./components/AreaRender";
import DeviceSearchRender from "./components/DeviceSearchRender";


class SearchRender extends React.Component<any, any>
{
  state = {
  };

  layout = {
    labelCol: { span: 4},
    wrapperCol: { span: 20 },
  };


  render() {

    return (
      //   {...this.layout}
      //   layout={'inline'}
      //   name="basic"
      //   initialValues={{ area: ['all'], device: ['0-0-0']}}
      //   onFinish={this.onFinish}
      //   onFinishFailed={this.onFinishFailed}
      //   requiredMark={false}
      // >
      //   </Form.Item>
      //
      //
      //   <Form.Item
      //     label="来源"
      //     name="referrer"
      //     rules={[{ required: true, message: 'Please input your password!' }]}
      //   >
      //     <Input.Password />
      //   </Form.Item>
      <Row>
        <Col span={8}><AreaRender /></Col>
        <Col span={8}><DeviceSearchRender /></Col>
        <Col span={8}>1</Col>
      </Row>
    );
  }
}

export default SearchRender;
