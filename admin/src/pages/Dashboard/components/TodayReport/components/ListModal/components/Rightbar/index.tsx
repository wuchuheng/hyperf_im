import React from "react";
import {Row, Col} from 'antd';
import styles from './index.less';
import { ReactSortable } from "react-sortablejs";
import { MoveIcon } from "@/components/Icons";
import {BasicClassState, ItemState } from './Type'
import {DashboardModelState, connect} from 'umi';
import {TodayReportItemState} from "@/models/DashboardModel";


const Rightbar = class Rightbar extends React.Component<any, any>
{
  state: BasicClassState = {
    list: []
  };

  constructor(props: any) {
    super(props);
  }

  static getDerivedStateFromProps(props: any, state: any)
  {
      if (state.list.length === 0 ) {
        const list = props.preSelectedItems.map((v:TodayReportItemState, i: number) => {
          const id = i + 1;
          return {...v, id:id};
        });
        return {list: list};
      } else {
        // 摇树当前排列没用的项-减去
        const allPreSelectedItemNames = props.preSelectedItems.map((v: TodayReportItemState) =>  v.name);
        const treeshakeList =  state.list.filter((v:ItemState) =>  allPreSelectedItemNames.indexOf(v.name) !== -1);
        treeshakeList.forEach((v: ItemState, i:number) => {
          const id = i + 1;
          treeshakeList[i].id = id;
        });
        // 新增勾选项目-增加
        let hasNewItems = false;
        let allListItemNames = treeshakeList.map((v: ItemState) => v.name);
        props.preSelectedItems.forEach((v: ItemState, i: number) => {
          if (allListItemNames.indexOf(v.name) === -1) {
            const id = treeshakeList.length + 1;
            const item = {...v, id: id};
            hasNewItems = true;
            treeshakeList.push(item);
          }
        });
        // 新的状态名目数集
        allListItemNames = treeshakeList.map((v: ItemState) => v.name);
        // 数目或者顺序对不上，进行调整
        if (JSON.stringify(allPreSelectedItemNames) != JSON.stringify(allListItemNames)) {
          console.log(allPreSelectedItemNames);
          console.log(allListItemNames);
          const correctItems = treeshakeList.map((v: ItemState) => {
            const {icon, name, value, title} = v;
            return {icon, name, value, title};
          });
          props.handleTest(correctItems);
        }
        return {...state, list: treeshakeList};
      }
  }

  setListHandle(newList:ItemState[])
  {
    this.setState({
      list: newList
    })
    const preSelectedItems = newList.map((v) => {
      const {title, icon, name, value} = v;
      return {title, icon, name, value};
    });
    this.props.dispatch({
      type: 'dashboard/preSelectItems',
      payload: preSelectedItems
    })
  }

  render() {
    const itemsRender =  this.state.list.map((item) => (
      <div key={item.id} className={styles.itemRender}>
        <div className={styles.content}>
          {item.title}
        </div>
        <div className={styles.content}>
          <MoveIcon />
        </div>
      </div>
    ));
    return (
      <Row>
        <Col span={23} className={styles.header} offset={1}>
          字段调整排序
        </Col>
        <Col span={24} >
          <ReactSortable
            list={this.state.list}
            animation={150}
            setList={(newState:ItemState[]) => this.setListHandle(newState)}
          >
              {itemsRender}
          </ReactSortable>
        </Col>
      </Row>
    );
  }
}

const mapPropsToState = ({dashboard}: {dashboard: DashboardModelState}) => {
  return {
    preSelectedItems: dashboard.todayReport.preSelectedItems
  };
}
export default connect(mapPropsToState)(Rightbar);
