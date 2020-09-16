import React from "react";
import styles from '../../index.less';
import {Row, Col, TreeSelect} from 'antd';

class ReferrerSearchRender extends React.Component<any, any>
{
  state = {
    referrerTreeData: [
      {
        title: '直接访问',
        value: 'explicit',
        key: '0-0',
      },
      {
        title: '第三方',
        value: 'thirdParty',
        key: '0-1',
      },
      {
        title: '搜索引擎',
        value: 'searchEngine',
        key: '0-2',
        children : [
          {
            title: '百度',
            value: 'baidu',
            key: '0-2-1',
          },
          {
            title: '360',
            value: '360',
            key: '0-2-1',
          },
          {
            title: '搜狗',
            value: 'sogo',
            key: '0-2-2',
          },
          {
            title: '神马',
            value: 'sm',
            key: '0-2-3',
          },
          {
            title: '必应',
            value: 'biyin',
            key: '0-2-4',
          },
          {
            title: '谷歌',
            value: 'google',
            key: '0-2-5',
          }
        ]
      },
      {
        title: '开放平台',
        value: 'open',
        key: '0-3',
        children : [
          {
            title: '百度bcp',
            value: 'bcp',
            key: '0-3-1',
          }
        ]
      }
    ]
  }

  /**
   *  设备选择
   */
  onChange = (value: any) => {
    console.log('onChange ', value);
    this.setState({ value });
  };
  render() {
    return (
      <Row>
        <Col span={4} >
          <div className={styles.lableWrapper}>
            <label>来源 :</label>
          </div>
        </Col>
        <Col span={20}>
          <TreeSelect
            treeData={this.state.referrerTreeData}
            onChange={this.onChange}
            treeCheckable={true}
            placeholder={'请选择'}
            dropdownMatchSelectWidth={false}
            style={{width: '100%'}}
            multiple={true}
            listHeight={500}
            treeDefaultExpandAll={true}
          />
        </Col>
      </Row>
    );
  }
}

export default ReferrerSearchRender;
