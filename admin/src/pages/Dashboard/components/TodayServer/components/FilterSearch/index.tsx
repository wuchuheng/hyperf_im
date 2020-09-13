import React from "react";
import { Row, Col } from 'antd';
import styles from './index.less';
import GroupSelect from "./components/GroupSelect";
import StatusSelect from "./components/StatusSelect";

class FilterSearch extends React.Component<any, any>
{
  render()
  {
    return(
       <Row gutter={[16, 0]} className={styles.main}>
          <Col span={11}>
            <Row>
              <Col span={6} className={styles.lable}>分组:</Col>
              <Col span={18}> <GroupSelect /> </Col>
            </Row>
          </Col>
         <Col span={11} offset={2}>
           <Row>
             <Col span={6} className={styles.lable}>状态:</Col>
             <Col span={18}><StatusSelect /></Col>
           </Row>
         </Col>
       </Row>
    );
  }
}

export default FilterSearch;
