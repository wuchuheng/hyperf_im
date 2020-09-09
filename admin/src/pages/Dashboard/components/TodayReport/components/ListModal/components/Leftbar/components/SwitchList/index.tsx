import React from "react";
import {Checkbox, Col, Row} from "antd";
import styles from './index.less';
import {
  BeingSessionsIcon,
  BeSessionsIcon,
  ClicksIcon,
  MessagesIcon,
  MissSessionsIcon, SuccessSessionsIcon,
  UserClicsIcon,
  UsersIcon
} from "@/components/Icons";
import { DashboardModelState, Loading, connect, useDispatch } from 'umi';
import {itemType, statusType, ComponentProps } from './Type'


const SwitchList = class SwitchList extends React.Component<any, any>
{
  state: statusType = {
    defaultData: [
      {
        title: '访问',
        items:[
          {value: "users", title:"访客数", isDisable: false, isCheck: false, icon: <UsersIcon /> },
          {value: "userClics", title:"访问次数", isDisable: false, isCheck: false, icon: <UserClicsIcon /> },
          {value: "clicks", title:"浏览量", isDisable: false, isCheck: false, icon: <ClicksIcon />}
        ]
      },
      {
        title: '对话',
        items:[
          {value: "beingSessions", title:"正在对话数", isDisable: false, isCheck: false, icon: <BeingSessionsIcon /> },
          {value: "beSessions", title:"已完成对话数", isDisable: false, isCheck: false , icon: <BeSessionsIcon />},
          {value: "messages", title:"消息数", isDisable: false, isCheck: false, icon: <MessagesIcon /> },
          {value: "missSessions", title:"遗漏对话", isDisable: false, isCheck: false, icon: <MissSessionsIcon /> },
          {value: "successSessions", title:"有效对话", isDisable: false, isCheck: false, icon: <SuccessSessionsIcon /> },
          {value: "test", title:"延误对话", isDisable: false, isCheck: false, icon: <SuccessSessionsIcon /> },
          // {value: "对话.主动转接", title:"主动转接", isDisable: false, isCheck: false },
          // {value: "对话.被动转接", title:"被动转接", isDisable: false, isCheck: false }
        ]
      },
      // {
      //   title: "表现",
      //   items: [
      //     { value: '表现.平均在线时长', title: '平均在线时长', isDisable: false, isCheck: false},
      //     { value: '表现.平均对话时长', title: '平均对话时长', isDisable: false, isCheck: false},
      //     { value: '表现.平均对话响应时长', title: '平均对话响应时长', isDisable: false, isCheck: false},
      //     { value: '表现.平均对话首次响应时长', title: '平均对话首次响应时长', isDisable: false, isCheck: false},
      //     { value: '表现.取线索数', title: '获取线索数', isDisable: false, isCheck: false},
      //   ]
      // },
      // {
      //   title: "评价",
      //   items: [
      //     { value: '评价.评价数', title: '评价数', isDisable: false, isCheck: false},
      //     { value: '评价.平均参评率', title: '平均参评率', isDisable: false, isCheck: false},
      //     { value: '评价.平均好评率', title: '平均好评率', isDisable: false, isCheck: false},
      //   ]
      // },
      // {
      //   title: "工单",
      //   items: [
      //     { value: '工单.已处理工单', title: '已处理工单', isDisable: false, isCheck: false},
      //     { value: '工单.待处理工单', title: '待处理工单', isDisable: false, isCheck: false},
      //   ]
      // },
    ],
  };
  selectLimit = 8;
  constructor(props:any) {
    super(props);
  }

  onChange(checkedValues: any[]): void
  {
    const allItems:any[] = [];
    this.state.defaultData.map((item, index) => {
      const {items} = item;
      allItems.push(...items)
    });
    let checkedItems = allItems.filter((item: itemType) => (checkedValues.indexOf(item.value) !== -1));
    checkedItems.length === this.selectLimit ? this._disableSelecteAnother(checkedItems) : this._ableSelecteAnother();
    checkedItems  = checkedItems.map((v, i) => {
      const {icon, title } = v;
      return {icon, value: "", title}
    })

    this.props.dispatch({
      type: 'dashboard/preSelectItems',
      payload: checkedItems
    })
  }

  /**
   *  禁止选择其它
   * @private
   */
  private _disableSelecteAnother(checkedItems: itemType[]): void
  {
    const defaultData = this.state.defaultData;
    defaultData.forEach((groupItem, groupIndex) => {
      groupItem.items.forEach((v, i) => {
        if (checkedItems.indexOf(v) === -1) {
          defaultData[groupIndex].items[i].isDisable = true;
        }
      })
    })
    this.setState({
      defaultData: defaultData
    })
  }

  private _ableSelecteAnother(): void
  {
    const defaultData = this.state.defaultData;
    defaultData.forEach((groupItem, groupIndex) => {
      groupItem.items.forEach((v, i) => {
          defaultData[groupIndex].items[i].isDisable = false
      })
    })
    this.setState({
      defaultData: defaultData
    })
  }

  render() {
    const switchRender =this.state.defaultData.map((v, i) => {
      const switchRender = v.items.map((itemV, itemI) => (
        <Col span={24} key={itemI}>
          <Checkbox value={itemV.value} disabled={itemV.isDisable}>{itemV.title}</Checkbox>
        </Col>
      ));
      let el = (
        <Row key={i} gutter={[0, 16]}>
          <Col span={24}>
              <Row key={i}>
                <Col span={24}>{v.title}</Col>
                {switchRender}
              </Row>
          </Col>
        </Row>
      )
      return el;
    });
    return (
      <div className={styles.main}>
        <Checkbox.Group style={{ width: '100%' }} onChange={(checkedValuel) => this.onChange(checkedValuel)}>
          {switchRender}
        </Checkbox.Group>
      </div>
    );
  }
}

const mapStateToProps = ({dashboard, loading }: {dashboard: DashboardModelState; loading: Loading}) => (
  {
    preSelectedItems: dashboard.todayReport.preSelectedItems,
    loading: loading.models.index
  }
);

export default connect(
  mapStateToProps
)(SwitchList);
