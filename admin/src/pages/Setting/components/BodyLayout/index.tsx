import React, {ReactNode} from "react";
import styles from "./index.less";
import {BackIcon} from "@/components/Icons";
import {history} from 'umi';


interface propsState {
  isBack?: boolean;
  title: string;
  children: ReactNode;
}

const BodyLayout = (props: propsState) => {
  const onHandleClick = () => {
   history.goBack();
  };
  const hasBackRender = props.isBack ? (
    <div
      onClick={onHandleClick}
      className={styles.iconWrapper}><BackIcon/></div>
  ) : (<></>);
  return (
    <div className={styles.pcWindowsWrapper}>
      <div className={styles.header}>
        {hasBackRender}
        <div className={styles.titleWrapper}>{props.title}</div>
      </div>
      <div className={styles.bodyWrapper}>
        {props.children}
      </div>
    </div>
  );
};

export default BodyLayout;
