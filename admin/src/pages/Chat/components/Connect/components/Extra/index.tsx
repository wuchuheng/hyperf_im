import React from "react";
import {
  UserAddOutlined,
  SettingOutlined
} from '@ant-design/icons';
import styles from './index.less';
import { Drawer } from 'antd';
import DrawerRender from "./components/DrawerRender";

class Extra extends React.Component<any, any>
{
  state = { visible: false};
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className={styles.extraWrapper}>
        <UserAddOutlined onClick={this.showDrawer}/>
        <SettingOutlined />
        <Drawer
          width={1000}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{padding: 0}}
        >
          <DrawerRender />
        </Drawer>
      </div>
    );
  }
}

export default Extra;



