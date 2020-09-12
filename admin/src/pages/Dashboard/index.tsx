import React from 'react';
import styles from './index.less';
import { Layout, Row, Col } from 'antd';
import TodayTrend from "@/pages/Dashboard/components/TodayTrend";
const { Content} = Layout;
import TodayReport from "@/pages/Dashboard/components/TodayReport";
import Notice from "@/pages/Dashboard/components/Notice";
import Activity from "@/pages/Dashboard/components/Activity";
import Service from './components/Service';

const Dashboard = class Dashboard extends React.Component<any, any>
{
  render()
  {
    return (
        <Content className={styles.contentWrapper}>
          <Row className={styles.row1} gutter={[8, 8]} >
            <Col span={18} >
              <Row gutter={[8, 12]}>
                <Col span={24}><TodayTrend /></Col>
              </Row>
              <Row>
                <Col span={24}><TodayReport /></Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row gutter={[0, 12]}>
                <Col span={24}><Notice /></Col>
                <Col span={24}><Activity /></Col>
                <Col span={24}><Service /></Col>
              </Row>
            </Col>
            <Col span={24} >
              <div className={styles.row1LeftCol}>
                col24-
              </div>
            </Col>
          </Row>
        </Content>
    );
  }
}

export default Dashboard;

