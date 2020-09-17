import React from "react";
import {PropsState} from './Type';
import {Row, Col} from 'antd';
import * as Icons from "@/components/Icons";
import styles from './index.less';

const VisitorInforRender = function (props: PropsState) {
  const DeviceIcon = Icons[props.deviceIcon];
  const {province, city, name, ip, OS, brower} = props;
  const OSIcon = Icons[props.OS];
  const BrowerIcon = Icons[brower];
  return (
    <Row>
      <Col span={24}>
        <Row>
          <Col span={4}>
              <div className={styles.iconWrapper} >
                <DeviceIcon className={styles.iconRender}/>
              </div>
          </Col>
          <Col span={20} className={styles.textWrapper}>
            <Col span={24}>{`${province}${city} ${name}`}</Col>
            <Col span={24}>{`${province} ${city} (${ip})`}</Col>
          </Col>
        </Row>
      </Col>
      <Col span={20} offset={4}>
        <Row>
          <Col span={2}>
            <OSIcon className={styles.buttomIconRender} />
          </Col>
          <Col span={2}>
            <BrowerIcon className={styles.buttomIconRender} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default VisitorInforRender;
