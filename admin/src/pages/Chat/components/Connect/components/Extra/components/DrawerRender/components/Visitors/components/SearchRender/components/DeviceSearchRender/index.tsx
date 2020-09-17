import React from "react";
import {Col, Row, TreeSelect} from "antd";
import styles from "../../index.less";

class DeviceSearchRender extends React.Component<any, any>
{
  state = {
    deviceTreeData: [
      {
        title: '手机',
        name: 'phone',
        key: '0-0',
        value: '0-0'
      },
      {
        title: '其它',
        name: 'other',
        key: '0-1',
        value: '0-1'
      },
      {
        title: '桌面',
        name: 'desktop',
        key: '0-2',
        value: '0-2',
        children : [
          {
            title: 'windows',
            name: 'windows',
            key: '0-2-1',
            value: '0-2-1'
          }
        ]
      }
    ]
  }

  /**
   *  设备选择
   */
  onChange = (value: any) => {
    console.log('onChange ', value);
    this.setState({ value });
  };
  render() {
    return (
      <Row>
        <Col span={5} >
          <div className={styles.lableWrapper}>
            <label>设备 :</label>
          </div>
        </Col>
        <Col span={19}>
          <TreeSelect
            treeData={this.state.deviceTreeData}
            onChange={this.onChange}
            treeCheckable={true}
            placeholder={'请选择'}
            style={{width: '100%'}}
            dropdownMatchSelectWidth={false}
            treeDefaultExpandAll={true}
          />
        </Col>
      </Row>
    );
  }
}

export default DeviceSearchRender;
