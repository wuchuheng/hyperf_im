import React from 'react';
import styles from './index.less';
import {Row, Col} from 'antd';
import Connect from "./components/Connect";
import Conversation from "@/pages/Chat/components/Conversation";

class Chat extends React.Component<any, any>
{
  render() {
    return (
      <Row>
        {/*联系区*/}
        <Col span={5} className={styles.connectWrapper}><Connect /></Col>
        {/*对话区*/}
        <Col span={19} className={styles.conversationWrapper}><Conversation /></Col>
      </Row>
    );
  }
}

export default Chat;
