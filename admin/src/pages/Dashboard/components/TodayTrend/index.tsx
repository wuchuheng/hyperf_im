import React from "react";
import { Card, Tooltip, Button } from 'antd';
import { QuestionCircleIcon } from  '@/components/Icons'
import styles from './index.less';
import { Chart, Line, Point } from 'bizcharts';

const TodayTrend = class TodayTrend extends React.Component<any, any>
{
  description = "以下数据呈现会根据客服权限范围进行显示：权限为个人时，每项数据仅显示客服人员自身的数据。权限为部分和全部时，每项数据则显示为权限内所有客服人员的单项数据之和或平均值";
  title = (
    <>
      今日对话和访客趋势
      <Tooltip placement="bottom" title={this.description}>
        <Button className={styles.buttonRender}>
          <QuestionCircleIcon className={styles.questCircleIcon}/>
        </Button>
      </Tooltip>
      </>
  );

  state = {
    data:[
      {
        hour: "-1:00",
        type: "访客数",
        temperature: 6
      },
      {
        hour: "-1:00",
        type: "对话数",
        temperature: 2.9
      },
      {
        hour: "0:00",
        type: "访客数",
        temperature: 5.9
      },
      {
        hour: "0:00",
        type: "对话数",
        temperature: 3.2
      },
      {
        hour: "1:00",
        type: "访客数",
        temperature: 8.5
      },
      {
        hour: "1:00",
        type: "对话数",
        temperature: 4.7
      },
      {
        hour: "2:00",
        type: "访客数",
        temperature: 13.5
      },
      {
        hour: "2:00",
        type: "对话数",
        temperature: 7.5
      },
      {
        hour: "3:00",
        type: "访客数",
        temperature: 17.4
      },
      {
        hour: "3:00",
        type: "对话数",
        temperature: 10.9
      },
      {
        hour: "4:00",
        type: "访客数",
        temperature: 20.5
      },
      {
        hour: "4:00",
        type: "对话数",
        temperature: 14.2
      },
      {
        hour: "5:00",
        type: "访客数",
        temperature: 24.2
      },
      {
        hour: "5:00",
        type: "对话数",
        temperature: 16
      },
      {
        hour: "6:00",
        type: "访客数",
        temperature: 25.5
      },
      {
        hour: "6:00",
        type: "对话数",
        temperature: 15.6
      },
      {
        hour: "7:00",
        type: "访客数",
        temperature: 22.3
      },
      {
        hour: "7:00",
        type: "对话数",
        temperature: 13.2
      },
      {
        hour: "8:00",
        type: "访客数",
        temperature: 17.3
      },
      {
        hour: "8:00",
        type: "对话数",
        temperature: 9.3
      },
      {
        hour: "9:00",
        type: "访客数",
        temperature: 12.9
      },
      {
        hour: "9:00",
        type: "对话数",
        temperature: 5.6
      },
      {
        hour: "10:00",
        type: "访客数",
        temperature: 8.6
      },
      {
        hour: "10:00",
        type: "对话数",
        temperature: 3.8
      },
      {
        hour: "11:00",
        type: "访客数",
        temperature: 8.6
      },
      {
        hour: "11:00",
        type: "对话数",
        temperature: 3.8
      },
      {
        hour: "12:00",
        type: "访客数",
        temperature: 8.6
      },
      {
        hour: "12:00",
        type: "对话数",
        temperature: 3.8
      },
      {
        hour: "13:00",
        type: "访客数",
        temperature: 8.6
      },
      {
        hour: "13:00",
        type: "对话数",
        temperature: 3.8
      },
      {
        hour: "14:00",
        type: "访客数",
        temperature: 8.6
      },
      {
        hour: "14:00",
        type: "对话数",
        temperature: 3.8
      },
      {
        hour: "15:00",
        type: "访客数",
        temperature: 8.6
      },
      {
        hour: "15:00",
        type: "对话数",
        temperature: 3.8
      },
      {
        hour: "16:00",
        type: "访客数",
        temperature: 8.6
      },
      {
        hour: "16:00",
        type: "对话数",
        temperature: 3.8
      },
      {
        hour: "17:00",
        type: "访客数",
        temperature: 8.6
      },
      {
        hour: "17:00",
        type: "对话数",
        temperature: 3.8
      },
      {
        hour: "18:00",
        type: "访客数",
        temperature: 8.6
      },
      {
        hour: "18:00",
        type: "对话数",
        temperature: 3.8
      },
      {
        hour: "19:00",
        type: "访客数",
        temperature: 8.6
      },
      {
        hour: "19:00",
        type: "对话数",
        temperature: 3.8
      },
      {
        hour: "20:00",
        type: "访客数",
        temperature: 8.6
      },
      {
        hour: "20:00",
        type: "对话数",
        temperature: 3.8
      },
      {
        hour: "21:00",
        type: "访客数",
        temperature: 8.6
      },
      {
        hour: "21:00",
        type: "对话数",
        temperature: -1
      },
      {
        hour: "22:00",
        type: "访客数",
        temperature: 8.6
      },
      {
        hour: "22:00",
        type: "对话数",
        temperature: 3.8
      },
      {
        hour: "23:00",
        type: "访客数",
        temperature: 8.6
      },
      {
        hour: "23:00",
        type: "对话数",
        temperature: 3.8
      },
    ]
  }

  componentDidMount() {

    setTimeout(()  => {
      this.setState({
        data:[
          {
            hour: "-1:00",
            type: "访客数",
            temperature: 6
          },
          {
            hour: "-1:00",
            type: "对话数",
            temperature: 2.9
          },
          {
            hour: "0:00",
            type: "访客数",
            temperature: 5.9
          },
          {
            hour: "0:00",
            type: "对话数",
            temperature: 3.2
          },
          {
            hour: "1:00",
            type: "访客数",
            temperature: 8.5
          },
          {
            hour: "1:00",
            type: "对话数",
            temperature: 4.7
          },
          {
            hour: "2:00",
            type: "访客数",
            temperature: 13.5
          },
          {
            hour: "2:00",
            type: "对话数",
            temperature: 7.5
          },
          {
            hour: "3:00",
            type: "访客数",
            temperature: 17.4
          },
          {
            hour: "3:00",
            type: "对话数",
            temperature: 10.9
          },
          {
            hour: "4:00",
            type: "访客数",
            temperature: 20.5
          },
          {
            hour: "4:00",
            type: "对话数",
            temperature: 14.2
          },
          {
            hour: "5:00",
            type: "访客数",
            temperature: 24.2
          },
          {
            hour: "5:00",
            type: "对话数",
            temperature: 16
          },
          {
            hour: "6:00",
            type: "访客数",
            temperature: 25.5
          },
          {
            hour: "6:00",
            type: "对话数",
            temperature: 15.6
          },
          {
            hour: "7:00",
            type: "访客数",
            temperature: 22.3
          },
          {
            hour: "7:00",
            type: "对话数",
            temperature: 13.2
          },
          {
            hour: "8:00",
            type: "访客数",
            temperature: 17.3
          },
          {
            hour: "8:00",
            type: "对话数",
            temperature: 9.3
          },
          {
            hour: "9:00",
            type: "访客数",
            temperature: 12.9
          },
          {
            hour: "9:00",
            type: "对话数",
            temperature: 5.6
          },
          {
            hour: "10:00",
            type: "访客数",
            temperature: 8.6
          },
          {
            hour: "10:00",
            type: "对话数",
            temperature: 3.8
          },
          {
            hour: "11:00",
            type: "访客数",
            temperature: 8.6
          },
          {
            hour: "11:00",
            type: "对话数",
            temperature: 3.8
          },
          {
            hour: "12:00",
            type: "访客数",
            temperature: 8.6
          },
          {
            hour: "12:00",
            type: "对话数",
            temperature: 3.8
          },
          {
            hour: "13:00",
            type: "访客数",
            temperature: 8.6
          },
          {
            hour: "13:00",
            type: "对话数",
            temperature: 3.8
          },
          {
            hour: "14:00",
            type: "访客数",
            temperature: 8.6
          },
          {
            hour: "14:00",
            type: "对话数",
            temperature: 3.8
          },
          {
            hour: "15:00",
            type: "访客数",
            temperature: 8.6
          },
          {
            hour: "15:00",
            type: "对话数",
            temperature: 3.8
          },
          {
            hour: "16:00",
            type: "访客数",
            temperature: 8.6
          },
          {
            hour: "16:00",
            type: "对话数",
            temperature: 3.8
          },
          {
            hour: "17:00",
            type: "访客数",
            temperature: 8.6
          },
          {
            hour: "17:00",
            type: "对话数",
            temperature: 3.8
          },
          {
            hour: "18:00",
            type: "访客数",
            temperature: 8.6
          },
          {
            hour: "18:00",
            type: "对话数",
            temperature: 3.8
          },
          {
            hour: "19:00",
            type: "访客数",
            temperature: 8.6
          },
          {
            hour: "19:00",
            type: "对话数",
            temperature: 3.8
          },
          {
            hour: "20:00",
            type: "访客数",
            temperature: 8.6
          },
          {
            hour: "20:00",
            type: "对话数",
            temperature: 3.8
          },
          {
            hour: "21:00",
            type: "访客数",
            temperature: 8.6
          },
          {
            hour: "21:00",
            type: "对话数",
            temperature: -1
          },
          {
            hour: "22:00",
            type: "访客数",
            temperature: 8.6
          },
          {
            hour: "22:00",
            type: "对话数",
            temperature: 7.10
          },
          {
            hour: "23:00",
            type: "访客数",
            temperature: 8.6
          },
          {
            hour: "23:00",
            type: "对话数",
            temperature: 3.8
          },
        ]
      })
    }, 2000)
  }


  render() {
    return(
      <Card title={this.title}>
        <Chart scale={{temperature: {min: 0}}} padding={[30,20,50,40]} autoFit height={325} data={this.state.data} >
          <Line shape="smooth" position="hour*temperature" color="type" label="temperature"/>
          <Point position="hour*temperature" color="type" />
        </Chart>
      </Card>
    );
  }
}

export default TodayTrend;
