import React from "react";
import {Checkbox, Col, Row} from "antd";
import styles from './index.less';
import { Loading, connect } from 'umi';
import {DashboardModelState, TodayReportItemState} from "@/models/DashboardModel";
import {ItemType, statusType} from './Type'
import {GroupItemsState} from "@/models/DashboardModel/Type";
import { SwitchGroupType } from "./Type";


const SwitchList = class SwitchList extends React.Component<any, any>
{
  state: statusType = {
    defaultData: [],
  };
  selectLimit = 8;
  constructor(props:any)
  {
    super(props);
    this._initDefaultData();
  }

  /**
   *  初始化默认选项
   */
  private _initDefaultData(): void
  {
    this.state.defaultData = this.state.defaultData = this.props.groupItems.map((v: GroupItemsState) => {
      const items = v.items.map((item) => {
          return {value: item.title, title: item.title, isDisable: false, checked:  false};
      });
      return {title: v.title, items: items};
    });
  }

  onChange(checkedValues: any[]): void
  {
    const allItems:any[] = [];
    this.state.defaultData.map((item, index) => {
      const {items} = item;
      allItems.push(...items)
    });
    let checkedItems = allItems.filter((item: ItemType) => (checkedValues.indexOf(item.value) !== -1));
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
  private _disableSelecteAnother(checkedItems: ItemType[]): void
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
