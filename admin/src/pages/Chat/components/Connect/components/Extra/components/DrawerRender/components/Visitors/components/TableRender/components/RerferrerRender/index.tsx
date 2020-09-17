import React from 'react';
import {PropsState} from './Type';
import { RerferrerMapTitleIconState } from '../../../../../../Type';
import * as Icons from "@/components/Icons";
import {Row, Col} from 'antd';

const RerferrerRender = function (props: PropsState) {
   const { title, icon }=  RerferrerMapTitleIconState[props.referrer];
   const Icon = Icons[icon];
  return (
      <Row>
        <Col span={2}>
          <Icon />
        </Col>
        <Col span={20} offset={2}>
          {title}
        </Col>
      </Row>
  );
}
export default RerferrerRender;
