import React from "react";
import {BarIcon} from "@/components/Icons";
import { Button, Modal, Row, Col } from 'antd';
import styles from './index.less'
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import {connect, DashboardModelState } from 'umi';
import {TodayReportItemState} from "@/models/DashboardModel";

class ListModal extends React.Component<any, any>
{
  state = {
    preSelectedItems: [],
    visible: false,
    title: (<span className={styles.title}>列表显示</span>)
  }

  constructor(props: any) {
    super(props);
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
    // 初始化预选项
    this.props.dispatch({
      type: 'dashboard/initTodayPreSelectItems'
    });
  };

  handleOk = (e:{}) => {
    this.setState({
      visible: false,
    });
    this.props.dispatch({
      type: 'dashboard/setSelectItems',
    })
  };

  handleCancel = (e:{}) => {
    this.setState({
      visible: false,
    });
  };

  /**
   *  修正排序
   */
  handleModulation(items: TodayReportItemState[])
  {
    this.props.dispatch({
      type: 'dashboard/preSelectItems',
      payload: items
    })
  }

  render() {
    return (
      <>
        <Button onClick={this.showModal}><BarIcon/></Button>
        <Modal
          title={this.state.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确认"
          cancelText="取消"
        >
          <Row className={styles.main}>
            <Col span={12}><Leftbar /></Col>
            <Col span={12}><Rightbar handleTest={(items: TodayReportItemState[]) => this.handleModulation(items) } /></Col>
          </Row>
        </Modal>
      </>
    );
  }
}

const mapPropsToStatus = ({dashboard}: {dashboard: DashboardModelState}) => {
  return {
    preSelectedItems: dashboard.todayReport.preSelectedItems
  };
};

export default connect(mapPropsToStatus)(ListModal);
