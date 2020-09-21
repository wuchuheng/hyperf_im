import React from "react";
import {Row, Col, Layout} from 'antd';
const {Header, Content} = Layout;
import styles from './index.less';
import LeftBar from "./components/LeftBar";

const ChatLink = (props: any) => {
  return (
   <Layout className={styles.layout} >
      <Header className={styles.header}>网页插件</Header>
      <Content>
        <div className={styles.mainContenWrapper}>
          <div className={styles.center}>
            <Row gutter={[16, 0]}>
              <Col span={5}>
                <div className={styles.item}>
                  <LeftBar />
                </div>
              </Col>
              <Col span={19} >
                <div>
                  2
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default ChatLink;
