import React from "react";
import { Select } from 'antd';
import styles from './index.less'
const { Option } = Select;


function handleChange(value: string) {
  console.log(`selected ${value}`);
}

class StatusSelect extends React.Component<any, any>
{
  render() {
    return (
      <>
        <Select defaultValue="all" onChange={handleChange} className={styles.statusSelectmain}>
          <Option value="all">全部</Option>
          <Option value="online">在线</Option>
          <Option value="hide">隐身</Option>
          <Option value="outline">离线</Option>
        </Select>
      </>
    );
  }
}
export default StatusSelect;
