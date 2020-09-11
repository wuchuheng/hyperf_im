import React from "react";
import {Checkbox, Col, Row} from "antd";
import styles from './index.less';
import { Loading, connect } from 'umi';
import {DashboardModelState, TodayReportItemState} from "@/models/DashboardModel";
import {ItemType, statusType} from './Type'
import {GroupItemsState} from "@/models/DashboardModel/Type";

const SwitchList = class SwitchList extends React.Component<any, any>
{
  state: statusType = {
    defaultData: [],
    defaultValues: []
  };

  constructor(props:any)
  {
    super(props);
  }

  /**
   *  更新state和props
   */
  static getDerivedStateFromProps(props: any, state: any)
  {
    // 初始化默认选中状态
    const alllSelectedValues=  state.defaultValues.length === 0 ?
      props.selectedItems.map((v: TodayReportItemState)  =>  v.name )
      :  state.defaultValues;

    // 初始化项
    state.defaultData = props.groupItems.map((v: GroupItemsState) => {
      const items = v.items.map((item) => {
        const isDisable = alllSelectedValues.length === 8 && alllSelectedValues.indexOf(item.name) === -1 ? true: false;
        return {value: item.name, title: item.title, isDisable: isDisable};
      });
      return {title: v.title, items: items};
    });

    return {defaultValues: alllSelectedValues, defaultData: state.defaultData};
  }

  onChange(checkedValues: any[]): void
  {
    const allItems:any[] = [];
    this.state.defaultData.map((item, index) => {
      const {items} = item;
      allItems.push(...items)
    });
    let checkedItems = allItems.filter((item: ItemType) => (checkedValues.indexOf(item.value) !== -1));
    const defaultValues = checkedItems.map((v) => v.value);
    this.setState({
      defaultValues: defaultValues
    })
    checkedItems  = checkedItems.map((v, i) => {
      const {icon, title, name } = v;
      return {icon, value: "", title, name}
    })
    this.props.dispatch({
      type: 'dashboard/preSelectItems',
      payload: checkedItems
    })
  }

  render() {
    const switchRender =this.state.defaultData.map((v, i) => {
      const switchRender = v.items.map((itemV, itemI) => {
          return (
            <Col span={24} key={itemI}>
              <Checkbox value={itemV.value} disabled={itemV.isDisable}>{itemV.title}</Checkbox>
            </Col>
          );
      }
      );
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
        <Checkbox.Group onChange={(checkedValuel) => this.onChange(checkedValuel)} defaultValue={this.state.defaultValues} >
          {switchRender}
        </Checkbox.Group>
      </div>
    );
  }
}

const mapStateToProps = ({dashboard, loading }: {dashboard: DashboardModelState; loading: Loading}) => {
  return {
    groupItems: dashboard.todayReport.groupItems,
    selectedItems: dashboard.todayReport.selectedItems,
    loading: loading.models.index,
    }
};

export default connect(
  mapStateToProps
)(SwitchList);
