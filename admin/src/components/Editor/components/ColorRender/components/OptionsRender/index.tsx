import React from "react";
import { Tabs, Col, Row } from 'antd';
import styles from './index.less';
const { TabPane } = Tabs;
import {PropsState} from './Type';


class OptionsRender extends React.Component<PropsState, any>
{
  constructor(props: PropsState) {
    super(props);
    console.log(props.color)
  }

  render() {
    return (
      <div className={styles.optionsRender}>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="文字颜色" key="1">
            <Row>
              {this.props.colors.map((v, i) => {
                return (<Col span={4} key={i}>
                  <div className={styles.itemWrapper}
                       onClick={() => this.props.onChangeColor(v)}
                  >
                    <div className={`${styles.itemRender} ${
                      this.props.color == v ? styles.itemRenderSelect : ''
                    }`} style={{backgroundColor: v}}></div>
                  </div>
                </Col>);
                })}
            </Row>
          </TabPane>
          <TabPane tab="背景颜色" key="2">
            <Row>
              {this.props.colors.map((v, i) => {
                return (<Col span={4} key={i}>
                  <div className={styles.itemWrapper}
                       onClick={() => this.props.onChangeBackColor(v)}
                  >
                    <div className={`${styles.itemRender} ${
                      this.props.backColor == v ? styles.itemRenderSelect : ''
                    }`} style={{backgroundColor: v}}></div>
                  </div>
                </Col>);
              })}
            </Row>
          </TabPane>
        </Tabs>
      </div>
    );
  }

}

export default OptionsRender;

