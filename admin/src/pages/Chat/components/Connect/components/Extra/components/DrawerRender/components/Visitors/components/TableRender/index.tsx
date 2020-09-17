import React from "react";
import { Table, Space } from 'antd';
import { ComputerIcon, WindowsIcon, ChromeIcon} from "@/components/Icons";
import {PropsState} from './components/VisitorInforRender/Type';
import VisitorInforRender from './components/VisitorInforRender';
import TotalRequestRender from './components/TotalRequestRender';
import RerferrerRender from "./components/RerferrerRender";
import {ReferrerState, TracksState} from './Type';
import TracksRender from './components/TracksRender';


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
        render: (V: {total: number; sex: 0 |1 |2}) => <TotalRequestRender sex={V.sex } total={V.total} />
      },
      {
        title: '来源',
        dataIndex: 'referrer',
        key: 'referrer',
        render: (referrer: ReferrerState) => <RerferrerRender referrer={referrer} />
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
        title: '正在访问',
        key: 'tracks',
        dataIndex: 'tracks',
        render: (tracks: TracksState) => <TracksRender tracks={tracks} />
      },
      {
        title: '操作',
        key: 'action',
        render: (text: any, record:any) => (
          <Space size="middle">
            {/*<a>Invite {record.name}</a>*/}
            {/*<a>Delete</a>*/}
            -
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
        totalRequest: {total: 32, sex: 1},
        referrer: 'explicit',
        utm: '-',
        tracks: {
          current: 'http://xxxx.com/....html',
          passed: [
            {time: '09-17 00:00:01', url: 'http://xxxx.cppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppom/....html'},
            {time: '09-18 00:00:02', url: 'http://xxxx.cppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppom/....html'},
            {time: '09-19 00:00:05', url: 'http://xxxx.com/....html'},
            {time: '09-20 00:00:02', url: 'http://xxxx.com/....html'}
          ]
        }
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
