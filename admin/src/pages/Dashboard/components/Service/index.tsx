import React from "react";
import { Card, Row, Col } from 'antd';
import styles from './index.less';
import {MailIcon, MessageIcon, QRCodeIcon} from "@/components/Icons";

class Service extends React.Component<any, any>
{
  render()
  {
    return(
      <Card title={'客服服务'}>
        <Row className={styles.main}>
          <Col span={18}>
            <Row gutter={[0, 3]}>
              <Col span={24} >
                <div className={styles.itemWrapper}>
                  <div className={styles.iconWrapere} >
                    <MessageIcon className={styles.icon}  />
                  </div>
                  <div className={styles.item}><a>立即联系</a></div>
                </div>
              </Col>
              <Col span={24} >
                <div className={styles.itemWrapper}>
                  <div className={styles.iconWrapere} >
                    <MailIcon className={styles.icon}  />
                  </div>
                  <div className={styles.item}>wuchuheng.com</div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <div className={styles.qrcodeWrapper}>
              <QRCodeIcon className={styles.qrcode}/>
            </div>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Service;
