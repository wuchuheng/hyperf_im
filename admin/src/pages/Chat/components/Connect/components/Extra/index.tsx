import React from "react";
import { Modal, Button } from 'antd';
import {
  UserAddOutlined,
  SettingOutlined
} from '@ant-design/icons';
import styles from './index.less';
import { Drawer } from 'antd';
import DrawerRender from "./components/DrawerRender";
import SettingRender from "./components/SettingRender";

class Extra extends React.Component<any, any>
{
  state = {
    visible: false,
    modalVisible: true
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      modalVisible: false,
    });
  };

  // 显示对话框
  showModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  // 对话框
  handleOk = (e: any) => {
    console.log(e);
    this.setState({
      modalVisible: false,
    });
  };

  // 对话框
  handleCancel = (e:any) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  render() {
    return (
      <div className={styles.extraWrapper}>
        <UserAddOutlined onClick={this.showDrawer}/>
        <SettingOutlined onClick={this.showModal}/>
        <Drawer
          width={1000}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{padding: 0}}
        >
          <DrawerRender />
        </Drawer>
        <Modal
          title="对话页设置"
          visible={this.state.modalVisible}
          onCancel={this.onClose}
          footer={null}
          bodyStyle={{padding: '0px'}}
          style={{minWidth: "600px"}}
        >
          <SettingRender/>
        </Modal>
      </div>
    );
  }
}

export default Extra;



