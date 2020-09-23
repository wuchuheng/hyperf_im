import React from "react";
import styles from "./index.less";
import {Radio} from "antd";
import miniImg from "@/assets/images/chat/setting_connect_chatLink_pcWindow_mini.png";
import normalImg from "@/assets/images/chat/chat_normal.png";
import fullScreenImg from "@/assets/images/chat/standar.png";
import customerImg from "@/assets/images/chat/customer.png";

const RadioGroupRender = (props: any) => {
  return (
      <div>
        <p>窗口样式</p>
        <div className={styles.switchWrapper}>
          <Radio.Group className={styles.centerWrapper}>
            <Radio className={styles.item} value={'mimi'}>
              <img src={miniImg} />迷你窗口
            </Radio>
            <Radio className={styles.item} value={'standard'}>
              <img src={normalImg} />
              标准窗口
            </Radio>
            <Radio className={styles.item} value={'fullScreen'}>
              <img src={fullScreenImg} />
              全屏窗口
            </Radio>
            <Radio className={styles.item} value={'custom'}>
              <img src={customerImg} />
              自定义窗口
            </Radio>
          </Radio.Group>
        </div>
      </div>
  );
};

export  default RadioGroupRender;
