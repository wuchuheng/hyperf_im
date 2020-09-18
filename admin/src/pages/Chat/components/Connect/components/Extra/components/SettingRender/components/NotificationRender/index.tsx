import React, {useState} from "react";
import {Form, Checkbox, Slider, Button} from 'antd';
import styles from './index.less';

const NotificationRender = (props: any) => {
  // 有新消息
  const [desktopForNews, setDesktopForNews] = useState(true);
  const onDesktopForNewsChange = (e: any) =>  setDesktopForNews(e.target.checked);
  const [voiceForNews, setVoiceForNews] = useState(true);
  const onVoiceForNewsChange = (e: any) =>  setVoiceForNews(e.target.checked);

  // 有新对话
  const [desktopForConversation, setDesktopForConversation] = useState(true);
  const onDesktopForConversationChange = (e: any) =>  setDesktopForConversation(e.target.checked);
  const [voiceForConversation, setVoiceForConversation] = useState(true);
  const onVoiceForConversationChange = (e: any) =>  setVoiceForConversation(e.target.checked);

  // 转入对话
  const [desktopForConnectIn, setDesktopForConnectIn] = useState(true);
  const onDesktopForConnectInChange = (e: any) =>  setDesktopForConnectIn(e.target.checked);
  const [voiceForConnectIn, setVoiceForConnectIn] = useState(true);
  const onVoiceForConnectInChange = (e: any) =>  setVoiceForConnectIn(e.target.checked);

  // 转出对话
  const [desktopForConnectOut, setDesktopForConnectOut] = useState(true);
  const onDesktopForConnectOutChange = (e: any) =>  setDesktopForConnectOut(e.target.checked);
  const [voiceForConnectOut, setVoiceForConnectOut] = useState(true);
  const onVoiceForConnectOutChange = (e: any) =>  setVoiceForConnectOut(e.target.checked);

  // 同事新对话
  const [desktopForWorker, setDesktopForWorker] = useState(true);
  const onDesktopForWorkerChange = (e: any) =>  setDesktopForWorker(e.target.checked);
  const [voiceForWorker, setVoiceForWorker] = useState(true);
  const onVoiceForWorkerChange = (e: any) =>  setVoiceForWorker(e.target.checked);

  // 声音大小
  const [volume, setVolume] = useState(30);
  const onVolumeChange = (e: any): void => console.log(e);
  return (
    <Form
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 10 }}
      className={styles.notificationRernderWrapper}
      size={'small'}
    >
      <Form.Item
        wrapperCol={{span: 24}}
        label={<span className={styles.labelRender}>消息通知</span>}
        >
          <Form.Item wrapperCol={{span: 23, offset: 1}} label={'有新消息'} >
            <Form.Item name={'destopForNews'} noStyle >
             <Checkbox checked={desktopForNews} onChange={onDesktopForNewsChange}>桌面通知</Checkbox>
            </Form.Item>
            <Form.Item name={'voiceForNews'} noStyle>
              <Checkbox checked={voiceForNews} onChange={onVoiceForNewsChange}>声音通知</Checkbox>
            </Form.Item>
          </Form.Item>

        <Form.Item wrapperCol={{span: 23, offset: 1}} label={'有新对话'} >
          <Form.Item name={'destopForConversation'} noStyle >
            <Checkbox checked={desktopForConversation} onChange={onDesktopForConversationChange}>桌面通知</Checkbox>
          </Form.Item>
          <Form.Item name={'voiceForConversation'} noStyle>
            <Checkbox checked={voiceForConversation} onChange={onVoiceForConversationChange}>声音通知</Checkbox>
          </Form.Item>
        </Form.Item>


        <Form.Item wrapperCol={{span: 23, offset: 1}} label={'转入对话'} >
          <Form.Item name={'destopForConnectIn'} noStyle >
            <Checkbox checked={desktopForConnectIn} onChange={onDesktopForConnectInChange}>桌面通知</Checkbox>
          </Form.Item>
          <Form.Item name={'voiceForConnectIn'} noStyle>
            <Checkbox checked={voiceForConnectIn} onChange={onVoiceForConnectInChange}>声音通知</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item wrapperCol={{span: 23, offset: 1}} label={'转出对话'} >
          <Form.Item name={'destopForConnectOut'} noStyle >
            <Checkbox checked={desktopForConnectOut} onChange={onDesktopForConnectOutChange}>桌面通知</Checkbox>
          </Form.Item>
          <Form.Item name={'voiceForConnectOut'} noStyle>
            <Checkbox checked={voiceForConnectOut} onChange={onVoiceForConnectOutChange}>声音通知</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item wrapperCol={{span: 23, offset: 1}} labelCol={{span: 3 }} label={'同事新对话'} >
          <Form.Item name={'destopForWorker'} noStyle >
            <Checkbox checked={desktopForWorker} onChange={onDesktopForWorkerChange}>桌面通知</Checkbox>
          </Form.Item>
          <Form.Item name={'voiceForWorker'} noStyle>
            <Checkbox checked={voiceForWorker} onChange={onVoiceForWorkerChange}>声音通知</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item wrapperCol={{span: 8, offset: 1}} label={'声音大小'} name={'volume'}>
          <Slider defaultValue={volume} onChange={onVolumeChange}/>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 10}}>
          <Button type="primary" htmlType="submit" shape="round">
            保存
          </Button>
        </Form.Item>
      </Form.Item>
    </Form>
  );
};

export default NotificationRender;
