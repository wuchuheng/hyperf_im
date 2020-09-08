import React, {ReactNode} from "react";
import {Checkbox, Col, Row} from "antd";
import styles from './index.less';

type itemType = {
  value: string;
  title: string;
  isDisable: boolean;
  isCheck: boolean;
}
type switchGroupType= {
  title: string,
  items: itemType[]
}

type statusType = {
  defaultData: switchGroupType[],
  switchRender: ReactNode
}

const Items = (props:{}) => {
  return (<>2</>);
}

const SwitchList = class SwitchList extends React.Component<any, any>
{
  state: statusType = {
    defaultData: [
      {
        title: '访问',
        items:[
          {value: "访客数", title:"访客数", isDisable: false, isCheck: false },
          {value: "访问次数", title:"访问次数", isDisable: false, isCheck: false },
          {value: "浏览量", title:"浏览量", isDisable: false, isCheck: false }
        ]
      },
      {
        title: '对话',
        items:[
          {value: "正在对话数", title:"正在对话数", isDisable: false, isCheck: false },
          {value: "已完成对话数", title:"已完成对话数", isDisable: false, isCheck: false },
          {value: "消息数", title:"消息数", isDisable: false, isCheck: false },
          {value: "遗漏对话", title:"遗漏对话", isDisable: false, isCheck: false },
          {value: "有效对话", title:"有效对话", isDisable: false, isCheck: false },
          {value: "延误对话", title:"延误对话", isDisable: false, isCheck: false },
          {value: "主动转接", title:"主动转接", isDisable: false, isCheck: false },
          {value: "被动转接", title:"被动转接", isDisable: false, isCheck: false }
        ]
      },
      {
        title: "表现",
        items: [
          { value: '平均在线时长', title: '平均在线时长', isDisable: false, isCheck: false},
          { value: '平均对话时长', title: '平均对话时长', isDisable: false, isCheck: false},
          { value: '平均对话响应时长', title: '平均对话响应时长', isDisable: false, isCheck: false},
          { value: '平均对话首次响应时长', title: '平均对话首次响应时长', isDisable: false, isCheck: false},
          { value: '获取线索数', title: '获取线索数', isDisable: false, isCheck: false},
        ]
      },
      {
        title: "评价",
        items: [
          { value: '评价数', title: '评价数', isDisable: false, isCheck: false},
          { value: '平均参评率', title: '平均参评率', isDisable: false, isCheck: false},
          { value: '平均好评率', title: '平均好评率', isDisable: false, isCheck: false},
        ]
      },
      {
        title: "工单",
        items: [
          { value: '已处理工单', title: '已处理工单', isDisable: false, isCheck: false},
          { value: '待处理工单', title: '待处理工单', isDisable: false, isCheck: false},
        ]
      },
    ],
    switchRender: (<></>)
  };

  constructor(props:{}) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      switchRender: this.switchRender()
    })
  }

  switchRender()
  {
    const switchRender =this.state.defaultData.map((v, i) => {
      const switchRender = v.items.map((itemV, itemI) => (
          <Col span={24}>
            <Checkbox value={itemV.value}>{itemV.title}</Checkbox>
          </Col>
      ));
      let el = (
        <Row key={i} gutter={[0, 16]}>
          <Col span={24}>
            <Checkbox.Group style={{ width: '100%' }} onChange={this.onChange} key={i}>
              <Row key={i}>
                <Col span={24}>{v.title}</Col>
                {switchRender}
              </Row>
            </Checkbox.Group>
          </Col>
        </Row>
      )
      return el;
    });
    return switchRender;
  }


  onChange(checkedValues: {}) {
    console.log('checked = ', checkedValues);
  }


  render() {
    return (
      <div className={styles.main}>
        {this.state.switchRender}
      </div>
    );
  }
}

export default SwitchList;
