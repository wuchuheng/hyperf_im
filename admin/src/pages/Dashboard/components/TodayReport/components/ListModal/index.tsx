import React from "react";
import {BarIcon} from "@/components/Icons";
import { Button, Modal, Row, Col } from 'antd';
import styles from './index.less'
import Leftbar from "@/pages/Dashboard/components/TodayReport/components/ListModal/components/Leftbar";

const ListModal = class ListModal extends React.Component<any, any>
{
  state = {
    visible: true,
    title: (<span className={styles.title}>列表显示</span>)
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e:{}) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e:{}) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

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
            <Col span={12}>2</Col>
          </Row>
        </Modal>
      </>
    );
  }
}

export default ListModal;
