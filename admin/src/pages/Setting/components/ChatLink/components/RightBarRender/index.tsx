import React from "react";
import styles from './index.less';
import {Row, Col} from 'antd';
import AddressRender from './components/AddressRender';
import ChatWindowsSettingRender from "./components/ChatWindowsSettingRender";
import VoiceSettingRender from "./components/VoiceSettingRender";

const RightBarRender = (props: any) => {
  return (
    <div className={styles.rightBarRender}>
      <Row gutter={[16, 16]}>
        <Col span={24}><AddressRender /></Col>
        <Col span={24}><ChatWindowsSettingRender /></Col>
        <Col span={24}><VoiceSettingRender /></Col>
      </Row>
    </div>
  );
};

export default RightBarRender;
