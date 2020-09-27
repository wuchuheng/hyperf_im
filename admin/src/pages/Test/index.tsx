import React, {useEffect, useState, useRef} from "react";
import {Col, Row} from 'antd';
import styles from './index.less';
import { Divider, Form, Input, Select, Button, Space} from 'antd';
const {OptGroup, Option} = Select;
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {websocketHost, websocketPort} from "@/config";
import ReactJson from 'react-json-view'
import {connect, WebsocketState} from 'umi';


type HistorySate = Array<{ time: string; date: string }>
type PushHistorySate = Array<{ time: string; data: any}>
const Test = (props: any) => {
  const dataShowRander = useRef(null);
  const initHistory:HistorySate = [];
  const [history, setHistory] = useState(initHistory);
  const initPushHistory: PushHistorySate = [];
  const [pushHistory, setPushHistory] = useState(initPushHistory);

  const getCurrentTime = (): string => {
    const time = new Date();
    const h = time.getHours();
    const i = time.getMinutes();
    const s = time.getSeconds();
    const formatTime = [h, i, s ].join(':');
    return formatTime;
  };
  const onHandleMessage = (event: MessageEvent) => {
    const formatTime = getCurrentTime();
    const item = {time: formatTime, date: JSON.parse(event.data)};
    const tempArr = history.slice();
    tempArr.push(item);
    setHistory(tempArr);
  };

  const onHandleClose = () => {
  }


  useEffect(() => {
    if (props.isOpen) {
      props.socket.addEventListener('message', onHandleMessage);
      props.socket.addEventListener('close', onHandleClose);
    }
    // @ts-ignore
    const div = dataShowRander.current as HTMLDivElement;
    div.scrollTop = div.scrollHeight;
    return () => {
      if (props.isOpen) {
        props.socket.removeEventListener('message', onHandleMessage)
        props.socket.removeEventListener('close', onHandleClose);
      }
    }
  })

  const onFinish = (values: any):void => {
    if (!props.isOpen) return ;
    let body = {};
    if (values.data.length > 0) {
      values.data.forEach((v: {name: string; value: string}, i: number) => {
        // @ts-ignore
        body[v.name] = v.value
      });
    }

    const requestData = {
      method: values.method,
      url: values.url,
      body: body
    };
    let cpPushHistory = pushHistory.slice();
    const formatTime = getCurrentTime();
    cpPushHistory.push({time: formatTime, data: requestData})
    setPushHistory(cpPushHistory);
    props.isOpen && props.socket.send(JSON.stringify(requestData));
  };

  const initUrl: string = '1111';
  const [url, setUrl] = useState(initUrl);
  const initMethod: string = 'post';
  const [method, setMethod] = useState(initMethod);
  const initData: Array<{name: string; value: string}> = [];
  const [data, setData] = useState(initData);

  const [form] = Form.useForm();

  const onHandleEmpty = () => {
    form.resetFields();
  };

  return (
    <div className={styles.testWrapper}>
      <Row justify="center">
        <Col span={24}><h1 className={styles.titleRender}>websocket 数据测试</h1></Col>
        <Col span={6}>
          <Divider>数据录入</Divider>
          <Form
            form={form}
            onFinish={onFinish}
            initialValues={{
              url, method, data
            }}
          >
            <Form.Item
              label="请求标识url" style={{ marginBottom: 0 }}
            >
              <Form.Item
                name={'url'}
                className={styles.urlItemRender}
                rules={[{ required: true, message: '请输入请求标识链接' }]}>
                <Input placeholder="请输入标识的url" />
              </Form.Item>
              <Form.Item
                name={'method'}
                className={styles.optionRnder}
                rules={[{ required: true, message: '请选择请求方式' }]}>
                <Select placeholder="请求方式">
                  <Option value={'post'}>post</Option>
                  <Option value={'get'}>get</Option>
                  <Option value={'delete'}>delete</Option>
                  <Option value={'put'}>put</Option>
                  <Option value={'patch'}>patch</Option>
                  <Option value={'ping'}>ping</Option>
                </Select>
              </Form.Item>
            </Form.Item>

            <Form.List name="data">
              {(fields, { add, remove }) => {
                return (
                  <div>
                    {fields.map(field => (
                      <Space key={field.key}  className={styles.spaceRender} align="start">
                        <Form.Item {...field} name={[field.name, 'name']}
                          fieldKey={[field.fieldKey, 'name']}
                          rules={[{ required: true, message: '请输入键名' }]}>
                          <Input placeholder="请输入键名" />
                        </Form.Item>
                        <Form.Item {...field} name={[field.name, 'value']}
                          fieldKey={[field.fieldKey, 'value']}
                          rules={[{ required: true, message: '请输入值' }]} >
                          <Input placeholder="值" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => { remove(field.name); }} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button type="dashed" onClick={() => { add(); }} block > <PlusOutlined />添加数据</Button>
                    </Form.Item>
                  </div>
                );
              }}
            </Form.List>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                发送
              </Button>
              <Button onClick={onHandleEmpty}>
                清空
              </Button>
            </Form.Item>
          </Form>
        </Col>

        <Col span={6} offset={1}>
          <Divider>数据上传:</Divider>
          <div className={styles.showRender} ref={dataShowRander} key={1}>
            <ReactJson src={pushHistory} />
          </div>
          <div className={styles.statusRender} key={2}>
            <div>连接状态:</div>
            <div className={styles.connectStatusRender} style={{backgroundColor: props.isOpen ? '#52c41a' : 'red'}}></div>
          </div>
        </Col>

        <Col span={6} offset={1}>
          <Divider>数据返回:</Divider>
          <div className={styles.showRender} ref={dataShowRander} key={1}>
            <ReactJson src={history} />
          </div>
        </Col>

      </Row>
    </div>
  );
}

const mapPropsToState = ({websocket}: {websocket: WebsocketState}) => {
  return {
    isOpen: websocket.isOpen,
    socket: websocket.ws
  }
};
export default connect(mapPropsToState)(Test);

