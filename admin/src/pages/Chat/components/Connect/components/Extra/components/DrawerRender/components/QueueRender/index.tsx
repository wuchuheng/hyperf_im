import React from "react";
import {Row, Col, Table, Space} from 'antd';
import {PropsState} from "../Visitors/components/TableRender/components/VisitorInforRender/Type";
import VisitorInforRender from "../Visitors/components/TableRender/components/VisitorInforRender";
import TotalRequestRender from "../Visitors/components/TableRender/components/TotalRequestRender";
import {ReferrerState} from "../Visitors/components/TableRender/Type";
import RerferrerRender from "../Visitors/components/TableRender/components/RerferrerRender";

const QueueRender = () => {
  const dataSource :Array<any> = [];

  const columns = [
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
      title: '操作',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          -
        </Space>
      ),
    },
  ];
  return (
    <div >
      <Row gutter={[16, 16]}>
        <Col span={24}>
            <Col span={24} >
              排队人数：0
            </Col>
            <Col span={24}>
              <Table dataSource={dataSource} columns={columns} />
            </Col>
        </Col>
      </Row>
    </div>
  );
};

export default QueueRender;
