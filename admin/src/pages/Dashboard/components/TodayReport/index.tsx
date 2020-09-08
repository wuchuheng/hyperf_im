import React from "react";
import {Button, Card, Tooltip} from "antd";
import styles from "./index.less";
import {QuestionCircleIcon} from "@/components/Icons";
import ListModal from "@/pages/Dashboard/components/TodayReport/components/ListModal";

const TodayReport = class TodayReport extends React.Component<any, any>
{
  description = "以下数据呈现会根据客服权限范围进行显示：权限为个人时，每项数据仅显示客服人员自身的数据。权限为部分和全部时，每项数据则显示为权限内所有客服人员的单项数据之和或平均值";
  title = (
    <>
      今日数据概览
      <Tooltip placement="bottom" title={this.description}>
        <Button className={styles.buttonRender}>
          <QuestionCircleIcon className={styles.questCircleIcon}/>
        </Button>
      </Tooltip>
    </>
  );
  render() {
    return (
      <Card title={this.title} extra={<ListModal />}>
      </Card>
    );
  }
}

export default TodayReport;
