import React, {ReactNode} from "react";
import {Row, Col, Button, Radio} from 'antd';
import styles from './index.less';
import BodyLayout from "@/pages/Setting/components/BodyLayout";
import ColorRender from './components/ColorRender';
import RadioGroupRender from './components/RadioGroupRencder';

const PcWindows = (props:any) => {
  return (
    <BodyLayout title={'桌面网站聊天窗口'} isBack>
      <div className={styles.PcWindowsWrapper}>
        <Row>
          <Col span={7}>
            <div className={styles.formWrapper}>
                <RadioGroupRender />
                <ColorRender className={styles.item}/>
            </div>
            <div className={styles.formButtomWrapper}>
              <Button>234</Button>
              <Button>234</Button>
            </div>
          </Col>
          <Col span={17}>
2
          </Col>
        </Row>
      </div>
    </BodyLayout>
  );
};

export default PcWindows;
