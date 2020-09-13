import React from "react";
import { Card } from 'antd';
import FilterSearch from "./components/FilterSearch";
import CardBody from "./components/CardBody";

class TodayServer extends React.Component<any, any>
{
  render() {
    return (
      <Card title={'今日客服状态'} extra={<FilterSearch />}>
        <CardBody />
      </Card>
    );
  }
}

export default TodayServer;
