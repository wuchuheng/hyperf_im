import React from "react";
import { Tabs, Col, Row } from 'antd';
import styles from './index.less';
const { TabPane } = Tabs;
import {PropsState} from './Type';
import ButtonRender from './components/ButtonRender';
import TagTitleRender from './components/TagTitleRender';


class OptionsRender extends React.Component<PropsState, any>
{
  state: any;
  constructor(props: PropsState) {
    super(props);
    this.state = {
      active: '1'
    }
    this._onActive = this._onActive.bind(this);
  }

  private _onActive(key: number)
  {
    console.log(key);
    const newKey = `${key}`;
    this.setState({
      active: newKey
    })
  }

  render() {
    return (
      <div className={styles.optionsRender}>
        <Tabs
              activeKey={this.state.active}
              centered
        >
          <TabPane tab={<TagTitleRender title={'文字颜色'} onChange={this._onActive} currentKey={1}/>} key="1">
            <Row>
              {this.props.colors.map((v, i) => {
                return (<Col span={4} key={i}>
                  <ButtonRender
                    onChange={this.props.onChangeColor}
                    color={v}
                    selectColor={this.props.color}
                    />
                </Col>);
                })}
            </Row>
          </TabPane>
          <TabPane tab={<TagTitleRender title={'背景颜色'} onChange={this._onActive} currentKey={2}/>} key="2">
            <Row>
              {this.props.colors.map((v, i) => {
                return (<Col span={4} key={i}>
                  <ButtonRender
                    onChange={this.props.onChangeBackColor}
                    color={v}
                    selectColor={this.props.backColor}
                  />
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

