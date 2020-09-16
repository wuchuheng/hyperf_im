import React from "react";
import {Row, Col, Cascader} from 'antd'
import styles from '../../index.less';

class AreaRender extends React.Component<any, any>
{
  state = {
    areaOptions:[
      {
        value: 'all',
        label: '全部',
      },
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake',
              },
            ],
          },
        ],
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
              },
            ],
          },
        ],
      }
    ],
    defaultValue: ['all']
  }
  /**
   * 区域选择
   */
  onChange(value: any) {
    console.log(value);
  }

  render() {
    return (
      <Row>
        <Col span={4} >
          <div className={styles.lableWrapper}>
            <label>区域 :</label>
          </div>
        </Col>
        <Col span={20}>
               <Cascader
                 options={this.state.areaOptions}
                 onChange={(v) => this.onChange(v)}
                 placeholder="请选择区域"
                 expandTrigger={'hover'}
                 style={{width: '100%'}}
                 defaultValue={this.state.defaultValue}
               />
        </Col>
      </Row>
    );
  }
}

export default AreaRender;
