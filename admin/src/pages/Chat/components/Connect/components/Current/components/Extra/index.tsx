import React from "react";
import {PropsState, KeyMapToTabSate } from "./Type";
import {KeyType} from "@/pages/Chat/components/Connect/components/Current/Type";
import styles from './index.less'



class Extra extends React.Component<PropsState, any>
{

  keyMapToTab: KeyMapToTabSate   = {
    coworker: (<div className={styles.mainWrapper}>选择</div>),
    own:  (<></>)
  }

  constructor(props: {noTitleKey: KeyType}) {
    super(props);
  }

  render() {
    const key = this.props.noTitleKey;
    const tab = this.keyMapToTab[key];
    return (
      <>{tab}</>
    );
  }
}

export default Extra;
