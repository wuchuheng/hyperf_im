import React from "react";
import {Card, Row, Col} from 'antd';

const ChatWindowsSettingRender = () => {
  return (
    <Card
      title={'聊天窗口外观设置'}
    >
      <Row>
        <Col span={24}>
          <Row>
            <Col span={3}>桌面窗口外观</Col>
            <Col span={3}><a>前往设置</a></Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={3}>手机窗口外观</Col>
            <Col span={3}><a>前往设置</a></Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default ChatWindowsSettingRender;
