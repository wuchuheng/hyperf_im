import React from "react";
import { Row, Col, Input, Checkbox } from 'antd';
import styles from './index.less'
import {SearchIcon} from "@/components/Icons";
import SwitchList from "./components/SwitchList";

const Leftbar = class Leftbar extends React.Component<any, any>
{

  optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
  ];


  render() {
    return (
      <>
        <Row>
          <Col span={22} className={styles.col} offset={1}>
            <Input
              placeholder="请输入搜索字段"
              className={styles.input}
              allowClear={true}
              suffix={<SearchIcon />}
            />
          </Col>
          <Col span={23} offset={1}>
            <SwitchList />
          </Col>
        </Row>
      </>
    )
  }
}

export default Leftbar;
