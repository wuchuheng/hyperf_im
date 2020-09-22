import React, {useState} from "react";
import styles from './index.less';
import {ExclamationIcon} from "@/components/Icons";
import { Form, Switch } from 'antd';

const VoiceSettingRender = (props: any) => {

  const [isOpenVoice, setIsOpenVoice] = useState(true);
  const onVoliceChange = (v: boolean) => {
    setIsOpenVoice(v)
  };

  return (
    <div className={styles.voiceSettingRender}>
      <h4>
        声音提示
      </h4>
      <ExclamationIcon className={styles.iconRender}/>
      <span>
      顾客在收到消息时, 对话框会播放提示音提醒
      </span>

      <Form>
        <Form.Item
          label={'功能启用'}
        >
          <Switch
            checkedChildren="开"
            unCheckedChildren="关"
            onChange={onVoliceChange}
            checked={isOpenVoice}
          />
        </Form.Item>
      </Form>

    </div>
  );
};

export default VoiceSettingRender;
