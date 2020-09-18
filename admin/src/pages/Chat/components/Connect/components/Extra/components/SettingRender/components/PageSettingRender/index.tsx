import React, {useState} from "react";
import {Row, Col, Form, Input, Button, Checkbox, Radio } from 'antd';
import styles from './index.less';
import {TabShowState} from './Type';

const PageSettingRender = (props: any) => {
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
  };

  const onFinish = (values:any) => {
    console.log('Success:', values);
  };
  const [chatModel, setChatModel] = useState('simple');

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onChatModelChange = (v:any):void => {
    setChatModel(v.target.value);
  }

  const [showClientTag, setShowTag] = useState(true);
  const onShowTagChange = (e:any): void => {
    setShowTag(e.target.checked);
  }

  const [ conversationTimeoutWarn,setConversationTimeoutWarn ] = useState(false)
  const onConverstionTimeoutWarnChange = (e: any): void => {
    setConversationTimeoutWarn(e.target.checked)
  }

  const [conversationOrder, setConversationOrder] = useState('orderByNews')
  const onConversationOrderChange = (e: any) => {
    setConversationOrder(e.target.checked)
  };

  const [noMSGGoBottom, setNoMSGGoBottom] = useState(true)
  const onNoMSGGoButtomChange = (e: any) => {
    setNoMSGGoBottom(!noMSGGoBottom);
  }

  const [tabshowClient, setTabShowClient] = useState(true);
  const onTabshowClientChange = (e: any) => {
    setTabShowClient(e.target.checked);
  };

  const [tabshowQuick, setTabShowQuick] = useState(false);
  const onTabshowQuickChange = (e: any) => {
    setTabShowQuick(e.target.checked);
  };

  const [tabshowPlugin, setTabShowPlugin] = useState(false);
  const onTabshowPluginChange = (e: any) => {
    setTabShowPlugin(e.target.checked);
  };

  const [quickShow, setQuickShow] = useState('quickShow')
  const onQuickShowChange = (e: any) => {
    setQuickShow(e.target.checked);
  }
  const [defaultPage, setDefaultPage] = useState('client')
  const onDefaultPageChange = (e: any) => {
    setDefaultPage(e.target.checked);
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
            quickShow,
            defaultPage
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
              rules={[{ required: true, message: 'Please input your username!' }]}
              noStyle
            >
              <Radio.Group onChange={onChatModelChange}>
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
                <Radio value={'quickShow'}>快捷显示</Radio>
                <Radio value={'tabShow'}>tab展示</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label={'默认页面'}
              name={'defaultPage'}
            >
              <Radio.Group onChange={onQuickShowChange}>
                <Radio value={'client'}>客户</Radio>
                <Radio value={'quick'} disabled>快捷</Radio>
              </Radio.Group>
            </Form.Item>

          </Form.Item>

          <Form.Item
            wrapperCol={{offset: 10, span: 12}}
          >
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              className={styles.buttonRender}
              size={'large'}
            >
              保存
            </Button>
          </Form.Item>
        </Form>
  );
}

export default PageSettingRender;
