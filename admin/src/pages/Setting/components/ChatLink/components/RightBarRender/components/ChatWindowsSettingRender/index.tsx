import React from "react";
import {Card, Row, Col} from 'antd';
import {Link, history, withRouter} from 'umi';


const ChatWindowsSettingRender = (props: any) => {
  console.log();
  return (
    <Card
      title={'聊天窗口外观设置'}
    >
      <Row>
        <Col span={24}>
          <Row>
            <Col span={3}>桌面窗口外观</Col>
            <Col span={3}>
              {/*<Link to={}*/}
              <Link to={`/setting/connect/chat-link/sites/${props.match.params.site}/pc-windows`}>
                前往设置
              </Link>
            </Col>
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

export default withRouter( ChatWindowsSettingRender );
