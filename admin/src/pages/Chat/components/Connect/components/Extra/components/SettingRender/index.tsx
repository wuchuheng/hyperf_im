import React from "react";
import {Tabs, Row, Col} from 'antd';
const { TabPane } = Tabs;
import  styles from './index.less';
import PageSettingRender from './components/PageSettingRender';
import NotificationRender from './components/NotificationRender';
import WelcomeRender from './components/WelcomeRender';
import BusinessCardRender from './components/BusinessCardRender';

function callback(key: any) {
  console.log(key);
}

const SettingRender = (props: any) => {
  return (
    <Tabs defaultActiveKey="4"
      onChange={callback}
      centered
      className={styles.mainWrapper}
      animated={{inkBar:true , tabPane: true}}
    >
      <TabPane tab="页面设置" key="1">
        <PageSettingRender />
      </TabPane>
      <TabPane tab="消息通知" key="2">
        <NotificationRender />
      </TabPane>
      <TabPane tab="客服欢迎语" key="3">
        <WelcomeRender />
      </TabPane>
      <TabPane tab="客服名片" key="4">
        <BusinessCardRender />
      </TabPane>
      <TabPane tab="快捷键" key="5">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
}

export default SettingRender;
