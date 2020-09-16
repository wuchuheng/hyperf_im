import React from "react";
import {Card} from 'antd';
import styles from './index.less';
import Current from "./components/Current";
import Extra from "@/pages/Chat/components/Connect/components/Extra";

class Connect extends React.Component<any, any>
{
  tabListNoTitle = [
    {
      key: 'current',
      tab: '当前',
    }
  ];
  state:{noTitleKey: 'current'} = {
    noTitleKey: 'current',
  };

  constructor(props: any) {
    super(props);
  }

  onTabChange = (key:string) => {
    this.setState({noTitleKey: key });
  };


  render() {
    const contentListNoTitle = {
      current: <Current />
    };

  return (
        <Card
          className={styles.cardMainWrapper}
          tabList={this.tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          tabBarExtraContent={<Extra />}
          onTabChange={key => {
            this.onTabChange(key);
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
    );
  }
}

export default Connect;
