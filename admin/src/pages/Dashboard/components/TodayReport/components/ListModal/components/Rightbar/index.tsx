import React from "react";
import {Row, Col} from 'antd';
import styles from './index.less';
import { ReactSortable } from "react-sortablejs";
import { MoveIcon } from "@/components/Icons";
import {BasicClassState } from './Type'


const Rightbar = class Rightbar extends React.Component<any, any>
{
  state: BasicClassState = {
    list: [
      { id: 1, name: "shrek1" },
      { id: 2, name: "shrek2" },
      { id: 3, name: "shrek3" },
      { id: 4, name: "shrek4" },
      { id: 5, name: "shrek5" },
      { id: 6, name: "shrek6" },
      { id: 7, name: "shrek7" },
      { id: 8, name: "shrek8" },
      ]
  };

  itemsRender =  this.state.list.map(item => (
    <div key={item.id} className={styles.itemRender}>
      <div className={styles.content}>
        {item.name}
      </div>
      <div className={styles.content}>
        <MoveIcon />
      </div>
    </div>
  ));

  setListHandle(newList:{})
  {
    // console.log(newList);
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <Row className={styles.main}>
        <Col span={23} className={styles.header} offset={1}>
          字段调整排序
        </Col>
        <Col span={24}>
          <ReactSortable
            list={this.state.list}
            animation={150}
            setList={(newState:{}) => this.setListHandle(newState)}
          >
              {this.itemsRender}
          </ReactSortable>
        </Col>
      </Row>
    );
  }
}

export default Rightbar;
