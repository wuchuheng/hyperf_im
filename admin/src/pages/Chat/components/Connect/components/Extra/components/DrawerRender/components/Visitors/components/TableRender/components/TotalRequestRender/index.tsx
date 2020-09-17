import React from "react";
import {PropsState} from './Type';
import {Row, Col} from 'antd';
import {ManIcon, WomanIcon} from "@/components/Icons";
import styles from './index.less';

const TotalRequestRender = function (props: PropsState) {
  const mapIcon = [
    <WomanIcon />,
    <ManIcon />,
    <></>
  ]

  return (
    <Row>
      <Col span={2}>{mapIcon[props.sex]}</Col>
      <Col span={10} offset={2}>
        <div className={styles.textWrapper}>
          {props.total}
        </div>
      </Col>
    </Row>
  );
}

export default TotalRequestRender;
