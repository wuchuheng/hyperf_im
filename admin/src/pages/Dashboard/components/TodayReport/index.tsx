import React, {ReactNode} from "react";
import {Button, Card, Tooltip, Row, Col } from "antd";
import styles from "./index.less";
import {QuestionCircleIcon} from "@/components/Icons";
import ListModal from "@/pages/Dashboard/components/TodayReport/components/ListModal";
import {DashboardModelState, Loading} from "@@/plugin-dva/connect";
import {IndexModelState, connect} from "umi";
import { TodayReportItemState} from "@/models/DashboardModel";
import * as Icons from "@/components/Icons";

const TodayReport = class TodayReport extends React.Component<any, any>
{
  constructor(props:any) {
    super(props);
  }
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
    const el = this.props.preSelectedItems.map((v: TodayReportItemState , i: number) => {
        const Icon =  Icons[v.icon];
        return(
          <Col span={6} key={i}>
            <div className={styles.item}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconRender} >
                  <Icon />
                </div>
              </div>
              <div className={styles.itemContentRender}>
                <div>{v.title}</div>
                <div>-</div>
              </div>
            </div>
          </Col>
        )
      }
    );
    return (
      <Card title={this.title} extra={<ListModal />}>
        <Row>
          {el}
        </Row>
      </Card>
    );
  }
}

const mapStateToProps = ({dashboard, loading }: {dashboard: DashboardModelState; loading: Loading}) =>{
 return  {
   preSelectedItems: dashboard.todayReport.selectedItems,
   loading: loading.models.index
  }
};

export default connect(
  mapStateToProps
)(TodayReport);

