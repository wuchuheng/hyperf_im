import React, {useState} from "react";
import {Form, Button, Checkbox, Radio, Popover, message } from 'antd';
import styles from './index.less';
import {EyesIcon} from "@/components/Icons";
import chatSettingQuickFix from '@/assets/images/chat/chat-setting-quick-fix.png';
import chatSettingQuickTab from '@/assets/images/chat/chat-setting-quick-tab.png';
import {connect, ChatState} from 'umi';
import {PageSettingState} from "@/models/ChatModel/Type";


const PageSettingRender = (props: any) => {
  const pageSetting = props.pageSetting as PageSettingState;
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 10 },
  };

  const onFinish = (values:any) => {
    const payload = Object.assign({},pageSetting);
    payload.connectBarSetting.contactModel = chatModel;
    payload.connectBarSetting.isShowClientTag = showClientTag;
    payload.connectBarSetting.isConversationTimeoutWarn = conversationTimeoutWarn;
    payload.connectBarSetting.contactOrder = conversationOrder;
    payload.connectBarSetting.isNoReplyGoBottom = noMSGGoBottom;
    payload.rightBarSetting.tabItems.clientTab.isShow = tabshowClient;
    payload.rightBarSetting.tabItems.quickTab.isShow = tabshowQuick;
    payload.rightBarSetting.tabItems.quickTab.showType = quickShow;
    payload.rightBarSetting.tabDefaultShow = defaultPage;
    props.dispatch({
      type: 'chat/savePageSetting',
      payload: payload
    }).then((res: boolean) => {
     message.success('操作成功!')
    });
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [chatModel, setContactModel] = useState(
    pageSetting.connectBarSetting.contactModel
  );
  const onContactModelChange = (v:any):void => {
    setContactModel(v.target.value);
  }

  const [showClientTag, setShowClientTag] = useState(
    pageSetting.connectBarSetting.isShowClientTag
  );
  const onShowTagChange = (e:any): void => {
    setShowClientTag(e.target.checked);
  }

  const [ conversationTimeoutWarn,setConversationTimeoutWarn ] = useState(
    pageSetting.connectBarSetting.isConversationTimeoutWarn
  )
  const onConverstionTimeoutWarnChange = (e: any): void => {
    setConversationTimeoutWarn(e.target.checked)
  }

  const [conversationOrder, setConversationOrder] = useState(
    pageSetting.connectBarSetting.contactOrder
  );
  const onConversationOrderChange = (e: any) => {
    setConversationOrder(e.target.checked)
  };

  const [noMSGGoBottom, setNoMSGGoBottom] = useState(
    pageSetting.connectBarSetting.isNoReplyGoBottom
  );
  const onNoMSGGoButtomChange = (e: any) => {
    setNoMSGGoBottom(!noMSGGoBottom);
  }

  const [tabshowClient, setTabShowClient] = useState(
    pageSetting.rightBarSetting.tabItems.clientTab.isShow
  );
  const onTabshowClientChange = (e: any) => {
    setTabShowClient(e.target.checked);
  };

  const [tabshowQuick, setTabShowQuick] = useState(
    pageSetting.rightBarSetting.tabItems.quickTab.isShow
  );
  const onTabshowQuickChange = (e: any) => {
    setTabShowQuick(e.target.checked);
    setDefaultPage('client');
  };

  const [tabshowPlugin, setTabShowPlugin] = useState(false);
  const onTabshowPluginChange = (e: any) => {
    setTabShowPlugin(e.target.checked);
  };

  const [quickShow, setQuickShow] = useState(
    pageSetting.rightBarSetting.tabItems.quickTab.showType // 'fix' | 'tab'
  );
  const onQuickShowChange = (e: any) => {
    // 固定展示只有客户一个选择
    if (e.target.value === 'fix') {
      setDefaultPage('client');
    }
    setQuickShow(e.target.value);
  }

  const [defaultPage, setDefaultPage] = useState(
    pageSetting.rightBarSetting.tabDefaultShow // 'client' | 'quick'
  )
  const onDefaultPageChange = (e: any) => {
    setDefaultPage(e.target.value);
  }

  return (
        <Form
          {...layout}
          layout="horizontal"
          initialValues={{
            chatModel,
            showClientTag,
            conversationOrder,
            noMSGGoBottom,
            quickShow
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className={styles.mainWrapper}
          size={'small'}
        >
          <Form.Item
            className={styles.groupItemWrapper}
            wrapperCol={{span: 24}}
            label={<span className={styles.labelRender}>对话列表显示</span>}
          >
            <Form.Item
              name="chatModel"
              noStyle
            >
              <Radio.Group onChange={onContactModelChange}>
                <Radio value={'normal'}>正常模式</Radio>
                <Radio value={'simple'}>极简模式</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name='showClientTag'
              noStyle
            >
              <Checkbox
                onChange={onShowTagChange}
                checked={showClientTag}
                disabled={chatModel=== 'simple' ? true: false}
              >显示顾客标签</Checkbox>
            </Form.Item>

            <Form.Item
              name='conversationTimeoutWarn'
              noStyle
            >
              <Checkbox
                onChange={onConverstionTimeoutWarnChange}
                checked={conversationTimeoutWarn}
                disabled={chatModel=== 'simple' ? true: false}
              >对话超时提醒</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item
            wrapperCol={{span: 24}}
            label={<span className={styles.labelRender}>对话列表排序</span>}
          >
            <Form.Item
              name="conversationOrder"
              noStyle
            >
              <Radio.Group onChange={onConversationOrderChange}>
                <Radio value={'orderByNews'}>按新消息排序</Radio>
                <Radio value={'orderByTime'}>按对话时间排序</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name='noMSGGoBottom'
              noStyle
            >
              <Checkbox
                onChange={onNoMSGGoButtomChange}
                checked={noMSGGoBottom}
              >打开无消息对话沉底</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item
            wrapperCol={{span: 24}}
            label={<span className={styles.labelRender}>右侧边栏</span>}
          >
            <Form.Item
              wrapperCol={{span: 24}}
              label={'tab展示'}
            >
              <Form.Item
                name='tabshowClient'
                label='tab展示'
                noStyle
              >
                <Checkbox
                  onChange={onTabshowClientChange}
                  disabled
                  checked={tabshowClient}
                >客户</Checkbox>
              </Form.Item>
              <Form.Item
                name='tabshowQuick'
                noStyle
              >
                <Checkbox
                  onChange={onTabshowQuickChange}
                  checked={tabshowQuick}
                  value={'quick'}>快捷</Checkbox>
              </Form.Item>
              <Form.Item
                name='tabshow'
                noStyle
              >
                <Checkbox
                  onChange={onTabshowPluginChange}
                  checked={tabshowPlugin}
                  value={'plugin'}>插件</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item
              label={'快捷显示'}
              name={'quickShow'}
              hidden={!tabshowQuick}
            >
              <Radio.Group onChange={onQuickShowChange}>
                <Radio value={'fix'}>
                  <Popover content={<img src={chatSettingQuickFix} className={styles.tabShowImgRender} />} placement="bottom">
                    固定展示<EyesIcon className={styles.eyesIconRender}/>
                  </Popover>
                </Radio>
                <Radio value={'tab'}>
                  <Popover content={<img src={chatSettingQuickTab} className={styles.tabShowImgRender} />} placement="bottom">
                    tab展示<EyesIcon className={styles.eyesIconRender}/>
                  </Popover>
                </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label={'默认页面'}
            >
              <Radio.Group onChange={onDefaultPageChange} value={defaultPage}>
                <Radio value={'client'}>客户</Radio>
                <Radio value={'quick'} disabled={!tabshowQuick || quickShow == 'fix'}>快捷</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              wrapperCol={{offset: 10, span: 12}}
            >
              <Button type="primary" htmlType="submit" shape="round" className={styles.buttonRender}>
                保存
              </Button>
            </Form.Item>
          </Form.Item>

        </Form>
  );
}

const mapPropsToState = ({chat}: {chat: ChatState})  => {
  return {
    pageSetting: chat.setting.pageSetting
  };
};

export default connect(mapPropsToState)(PageSettingRender);
