import React, {ChangeEvent} from "react";
import { Row, Col, Input, Checkbox } from 'antd';
import styles from './index.less'
import {SearchIcon} from "@/components/Icons";
import SwitchList from "./components/SwitchList";
import {DashboardModelState, connect} from 'umi';
import {Loading} from "@@/plugin-dva/connect";
import {GroupItemsState} from "@/models/DashboardModel/Type";

const Leftbar = class Leftbar extends React.Component<any, any>
{
  state: {groupItems: GroupItemsState[]} = {
    groupItems: []
  };

  constructor(props: any) {
    super(props);
    this._initGroupItems();
  }

  /**
   *  初始化组选项
   */
  private _initGroupItems()
  {
    this.props.dispatch({
      type: 'dashboard/initTodayGroupItems'
    });
  }

  /**
   *  初始化全部选项
   */
  static getDerivedStateFromProps(props: any, state: any)
  {
    if (state.groupItems.length < props.groupItems.length) {
      return {groupItems: props.groupItems};
    }
    return null;
  }

  /**
   *  搜索
   */
  private _serach(e: ChangeEvent<HTMLInputElement>): void
  {
    const keyword = e.target.value;
    const res = this.state.groupItems.map((v) => {
      const items = v.items.filter((item) => item.title.indexOf(keyword) !== -1);
      return {...v, items};
    });
    this.props.dispatch({
      type: 'dashboard/searchTodaySelectItems',
      payload: res
    })
  }

  render() {
    return (
      <>
        <Row className={styles.mainRender}>
          <Col span={22} className={styles.col} offset={1}>
            <Input
              placeholder="请输入搜索字段"
              className={styles.input}
              allowClear={true}
              onChange={(e:ChangeEvent<HTMLInputElement>) => this._serach(e)}
              suffix={<SearchIcon />}
            />
          </Col>
          <Col span={23} offset={1}>
            <SwitchList />
          </Col>
        </Row>
      </>
    )
  }
}
const mapPropsToState = ({dashboard, loading }: {dashboard: DashboardModelState; loading: Loading}) => {
  return {
    groupItems: dashboard.todayReport.groupItems,
    loading: loading.models.index,
  }
};
export default connect(mapPropsToState)(Leftbar);
