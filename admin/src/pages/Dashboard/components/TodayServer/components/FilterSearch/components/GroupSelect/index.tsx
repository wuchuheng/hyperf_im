import React from "react";
import {TreeSelect } from 'antd';
import styles from './index.less';

const { SHOW_PARENT } = TreeSelect;


const treeData = [
  {
    title: '默认分组',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: '超级管理员',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: '分组B',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: '角色A',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: '角色B',
        value: '0-1-1',
        key: '0-1-1',
      },
    ],
  },
];

class GroupSelect extends React.Component<any, any>
{
  state = {
    value: ['0-0-0'],
  };

  onChange =(value: string[]) => {
    console.log('onChange ', value);
    this.setState({ value });
  };

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      placeholder: 'Please select',
    };
    return <TreeSelect treeDefaultExpandAll {...tProps} className={styles.groupSelectMain} />;
  }
}

export default GroupSelect;
