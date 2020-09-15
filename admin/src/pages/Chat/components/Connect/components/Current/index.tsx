import React from "react";
import styles from "./index.less";
import Own from './components/Own';
import Coworker from "./components/Coworker";
import {BaseState, KeyType} from "./Type";
import Extra from "./components/Extra";

class Current extends React.Component<any, any>
{
  constructor(props: any) {
    super(props);
  }

  state: BaseState = {
    noTitleKey: 'own',
    tabListNoTitle: [
      {
        key: 'own',
        tab: '我的',
      },
      {
        key: 'coworker',
        tab: '同事',
      }
    ]
  };

  onTabChange = (key: KeyType) => {
    this.setState({noTitleKey: key});
  };

  render() {
    const contentListNoTitle = {
      own: <Own />,
      coworker: <Coworker />
    };

    const mapList  = this.state.tabListNoTitle.map((v) => {
      const  noActiveClassName = v.key === this.state.noTitleKey ? styles.noActiveTab : '';
      return (
        <div
          className={styles.headerLeftItemRender + ` ${noActiveClassName}`} key={v.key}
          onClick={() => this.onTabChange(v.key)}
        >{v.tab}</div>
      );
    });

    return (
      <div className={styles.mainWrpper}>
        <div className={styles.headerWrapper}>
          <div className={styles.leftSwitch}>
            {mapList}
          </div>
          <div>
            <Extra noTitleKey={this.state.noTitleKey} />
          </div>
        </div>
        <div className={styles.bodyWrapper}>
          {contentListNoTitle[this.state.noTitleKey]}
        </div>
      </div>
    );
  }
}

export default Current;
