import React from "react";
import { Table, Tag, Space } from 'antd';
import {ServerState, StatusState} from './Type';
// @ts-ignore
import avatar from "@/assets/images/default-avatar.jpg";
import ServerField from "./components/ServerField";
import styles from './index.less';

export default class CardBody extends React.Component<any, any>
{
  render() {
    const columns = [
      {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render: (text: string) => (<div className={styles.fontColor}>{text}</div>)
      },
      {
        title: '客服',
        dataIndex: 'server',
        key: 'server',
        width: 140,
        render: (server: ServerState) => {
          return (
              <ServerField nickname={server.nickname} avator={server.avator} />
          );
        }
      },
      {
        title: '工号',
        dataIndex: 'workNumber',
        key: 'workNumber',
        render: (text: string) => (<div className={styles.fontColor}>{text}</div>)
      },
      {
        title: '所在小组',
        key: 'group',
        dataIndex: 'group',
        render: (text: string) => (<div className={styles.fontColor}>{text}</div>)
      },
      {
        title: '状态',
        key: 'status',
        dataIndex: 'status',
        render: (statu: StatusState) => {
          const allStatue = {online: '在线', outline: '离线', 'hide': '隐身'};
          return (
            <div key={statu} className={styles.fontColor}>
                {allStatue[statu]}
            </div>
          )
        },
      },
      {
        title: '正在对话数量',
        dataIndex: 'beingCountSessions',
        key: 'beingCountSessions',
        render: (text: string) => (<div className={styles.fontColor}>{text}</div>)
      },

      {
        title: '已完成对话数量',
        dataIndex: 'beCountSessions',
        key: 'beCountSessions',
        render: (text: string) => (<div className={styles.fontColor}>{text}</div>)
      },
      {
        title: '在线时长',
        dataIndex: 'beCountOnline',
        key: 'beCountOnline',
        render: (text: string) => (<div className={styles.fontColor}>{text}</div>)
      },
      {
        title: '好评率',
        dataIndex: 'wellReceived',
        key: 'wellReceived',
        render: (text: string) => (<div className={styles.fontColor}>{text}</div>)
      },
      {
        title: '操作',
        key: 'action',
        render: (text: string) =>  {
          return (
            <Space size="middle">
              <a>强制下线</a>
            </Space>
          );
        }
      },
    ];

    const data = [
      {
        key: '1',
        id: '1',
        server: {nickname: '超级管理员', avator: avatar},
        workNumber: '-',
        group: '默认分组',
        status: 'online',
        beingCountSessions: '-',
        beCountSessions: '-',
        beCountOnline: '-',
        wellReceived: '-',
      },
    ];
    return (
      <Table columns={columns} dataSource={data} />
    );
  }
}

