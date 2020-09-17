import React from "react";
import { Table, Tag, Space } from 'antd';
const { Column, ColumnGroup } = Table;
import {CommandsIcon, ComputerIcon, WindowsIcon, ChromeIcon} from "@/components/Icons";
import {PropsState} from './components/VisitorInforRender/Type';
import VisitorInforRender from './components/VisitorInforRender';

class TableRender extends React.Component<any, any>{
  state = {
    columns: [
      {
        title: '访客信息',
        dataIndex: 'visitorInfo',
        key: 'visitorInfo',
        render: (props: PropsState) => <VisitorInforRender {...props}/>,
      },
      {
        title: '访问次数',
        dataIndex: 'totalRequest',
        key: 'totalRequest',
      },
      {
        title: '来源',
        dataIndex: 'referrer',
        key: 'referrer',
        render: (text: any) => text
      },
      {
        title: 'utm',
        key: 'utm',
        dataIndex: 'utm',
        render: (text: string) => (
          <> {text} </>
        ),
      },
      {
        title: '操作',
        key: 'action',
        render: (text: any, record:any) => (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </Space>
        ),
      },
    ],
    data: [
      {
        key: '1',
        visitorInfo: {
          deviceIcon: 'ComputerIcon',
          province:'广东',
          city: '惠州',
          name: '#1',
          ip: '120.229.166.85',
          OS: 'WindowsIcon',
          brower: 'ChromeIcon'
        },
        totalRequest: 32,
        referrer: '直接访问',
        utm: '-'
      },
    ]
  };
  render() {
    return (
        <Table columns={this.state.columns} dataSource={this.state.data} />
    );
  }
}

export default TableRender;
