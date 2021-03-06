import React from "react";
import {Card} from 'antd';
import {BaseState, KeyType, ContentListNoTitleType } from './Type';
import Visitors from "./components/Visitors";
import QueueRender from "./components/QueueRender";
import Styles from './index.less';

class DrawerRender extends React.Component<any, any>
{
  state:BaseState = {
    noTitleKey: 'visitor',
    tabListNoTitle: [
      {
        key: 'visitor',
        tab: '访客'
      },
      {
        key: 'queue',
        tab: '排队'
      }
    ]
  };

  onTabChange = (key: KeyType ) => {
    this.setState({ noTitleKey: key });
  };

  render() {
    const contentListNoTitle: ContentListNoTitleType = {
      visitor: <Visitors />,
      queue: <QueueRender />
    };

    return (
      <Card
        style={{ width: '100%' }}
        tabList={this.state.tabListNoTitle}
        activeTabKey={this.state.noTitleKey}
        onTabChange={(key) => {
          const tabKey = key as KeyType;
          this.onTabChange(tabKey) ;
        }}
        className={Styles.mainWrapper}
      >
        {contentListNoTitle[this.state.noTitleKey]}
      </Card>
    );
  }
  }

  export default DrawerRender;
