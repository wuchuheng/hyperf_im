import React from "react";
import {Form, Input, Cascader, TreeSelect, Row, Col} from 'antd';
const { SHOW_PARENT } = TreeSelect;
import AreaRender from "./components/AreaRender";
import styles from './index.less';

class SearchRender extends React.Component<any, any>
{
  state = {
    deviceTreeData: [
      {
        title: '手机',
        value: 'phone',
        key: '0-0',
      },
      {
        title: '其它',
        value: 'other',
        key: '0-1',
      },
      {
        title: '桌面',
        value: 'desktop',
        key: '0-2',
        children : [
          {
            title: 'windows',
            value: 'windows',
            key: '0-2-1',
          }
        ]
      }
    ]
  };

  layout = {
    labelCol: { span: 4},
    wrapperCol: { span: 20 },
  };


  /**
   *  设备选择
   */
  onDeviceChange = (value: any) => {
    console.log('onChange ', value);
    this.setState({ value });
  };

  onFinish = (values: any) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

  render() {

    return (
      // <Form
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
      //   <Form.Item
      //     label="设备"
      //     name="device"
      //   >
      //     <TreeSelect
      //       treeData={this.state.deviceTreeData}
      //       onChange={this.onDeviceChange}
      //       treeCheckable={true}
      //       style={{width: '100%'}}
      //       dropdownMatchSelectWidth={false}
      //     />
      //   </Form.Item>
      //
      //   <Form.Item
      //     label="来源"
      //     name="referrer"
      //     rules={[{ required: true, message: 'Please input your password!' }]}
      //   >
      //     <Input.Password />
      //   </Form.Item>
      // </Form>
      <Row>
        <Col span={8}><AreaRender /></Col>
        <Col span={8}>1</Col>
        <Col span={8}>1</Col>
      </Row>
    );
  }
}

export default SearchRender;
