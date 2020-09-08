import React from 'react';
import styles from './index.less';
import { Layout, Row, Col } from 'antd';
import TodayTrend from "@/pages/Dashboard/components/TodayTrend";
const { Content} = Layout;
import TodayReport from "@/pages/Dashboard/components/TodayReport";

const Dashboard = class Dashboard extends React.Component<any, any>
{
  render()
  {
    return (
      <>
        <Content className={styles.contentWrapper}>
          <Row className={styles.row1} gutter={[16, 16]}>
            <Col span={18} >
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <TodayTrend />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <TodayReport />
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <div className={styles.row1RightCol}>
                col-12
              </div>
            </Col>
          </Row>
        <Row className={styles.row1} gutter={[16, 16]}>
          <Col span={12} >
            <div className={styles.row1LeftCol}>
              col-12
            </div>
          </Col>
          <Col span={12}>
            <div className={styles.row1RightCol}>
              col-12
            </div>
          </Col>
        </Row>

        </Content>
      </>
    );
  }
}

export default Dashboard;

