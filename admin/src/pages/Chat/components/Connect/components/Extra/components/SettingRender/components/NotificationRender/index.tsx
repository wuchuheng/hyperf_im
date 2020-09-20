import React, {useState} from "react";
import {Form, Checkbox, Slider, Button, message} from 'antd';
import styles from './index.less';
import {connect, ChatState} from 'umi';
import {NotificationState} from "@/models/ChatModel";

const NotificationRender = (props: any) => {
  const notificationSetting = props.notificationSetting as NotificationState;

  // 有新消息
  const [desktopForNews, setDesktopForNews] = useState(
    notificationSetting.hasNews.isDesktopNotification
  );
  const onDesktopForNewsChange = (e: any) =>  setDesktopForNews(e.target.checked);
  const [voiceForNews, setVoiceForNews] = useState(
    notificationSetting.hasNews.isVoiceNotification
  );
  const onVoiceForNewsChange = (e: any) =>  setVoiceForNews(e.target.checked);

  // 有新对话
  const [desktopForConversation, setDesktopForConversation] = useState(
    notificationSetting.hasConversation.isDesktopNotification
  );
  const onDesktopForConversationChange = (e: any) =>  setDesktopForConversation(e.target.checked);
  const [voiceForConversation, setVoiceForConversation] = useState(
    notificationSetting.hasConversation.isVoiceNotification
  );
  const onVoiceForConversationChange = (e: any) =>  setVoiceForConversation(e.target.checked);

  // 转入对话
  const [desktopForConnectIn, setDesktopForConnectIn] = useState(
    notificationSetting.connectIn.isDesktopNotification
  );
  const onDesktopForConnectInChange = (e: any) =>  setDesktopForConnectIn(e.target.checked);
  const [voiceForConnectIn, setVoiceForConnectIn] = useState(
    notificationSetting.connectIn.isVoiceNotification
  );
  const onVoiceForConnectInChange = (e: any) =>  setVoiceForConnectIn(e.target.checked);

  // 转出对话
  const [desktopForConnectOut, setDesktopForConnectOut] = useState(
    notificationSetting.connectOut.isDesktopNotification
  );
  const onDesktopForConnectOutChange = (e: any) =>  setDesktopForConnectOut(e.target.checked);
  const [voiceForConnectOut, setVoiceForConnectOut] = useState(
    notificationSetting.connectOut.isVoiceNotification
  );
  const onVoiceForConnectOutChange = (e: any) =>  setVoiceForConnectOut(e.target.checked);

  // 同事新对话
  const [desktopForWorker, setDesktopForWorker] = useState(
    notificationSetting.worker.isDesktopNotification
  );
  const onDesktopForWorkerChange = (e: any) =>  setDesktopForWorker(e.target.checked);
  const [voiceForWorker, setVoiceForWorker] = useState(
  notificationSetting.worker.isVoiceNotification
);
  const onVoiceForWorkerChange = (e: any) =>  setVoiceForWorker(e.target.checked);

  // 声音大小
  const [volume, setVolume] = useState(
    notificationSetting.volume
  );
  const onVolumeChange = (e: any): void => setVolume(e);

  // 提交表单
  const onFinishChange = (v: any) => {
     const payload: NotificationState = {
       hasNews: {
         isDesktopNotification: desktopForNews,
         isVoiceNotification: voiceForNews
       },
       hasConversation: { // 有新对话
         isDesktopNotification: desktopForConversation,
         isVoiceNotification: voiceForConversation
       },
       connectIn: { // 转入对话
         isDesktopNotification: desktopForConnectIn,
         isVoiceNotification: voiceForConnectIn
       },
       connectOut: { // 转出对话
         isDesktopNotification: desktopForConnectOut,
         isVoiceNotification: voiceForConnectOut
       },
       worker: { // 同事新对话
         isDesktopNotification: desktopForWorker,
         isVoiceNotification: voiceForWorker
       },
       volume: volume  // 声音
     };
     props.dispatch({
       type: 'chat/saveNotificationSetting',
       payload: payload
     }).then((res: boolean) => {
       message.success('操作成功!')
     });
  };
  return (
    <Form
      onFinish={onFinishChange}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 10 }}
      className={styles.notificationRernderWrapper}
      size={'small'}
      initialValues={ {
        volume
      }}
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

        <Form.Item wrapperCol={{span: 8, offset: 1}} label={'声音大小'}
                   name={'volume'}>
          <Slider value={volume} onChange={onVolumeChange}/>
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

const mapPropsToState = ({chat}: {chat: ChatState}) => {
  return {
    notificationSetting: chat.setting.notificationSetting
  };
}
export default connect(mapPropsToState)(NotificationRender);
