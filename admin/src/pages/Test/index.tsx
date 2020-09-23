import React, {useEffect, useState, useRef} from "react";
import {Col, Row} from 'antd';
import styles from './index.less';
import { Divider, Form, Input, Select, Button, Space} from 'antd';
const {OptGroup, Option} = Select;
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {websocketHost, websocketPort} from "@/config";

const socket = new WebSocket(`ws://${websocketHost}:${websocketPort}`);

type HistorySate = Array<{ time: string; date: string }>
const Test = () => {
  const dataShowRander = useRef(null);
  const [isConnect, setIsConnect] = useState(false);
  const initHistory:HistorySate = [];
  const [history, setHistory] = useState(initHistory);
  const onHandleOpen = () => {
    // 心跳
    setInterval(() => {
      socket.send(
        JSON.stringify({ "type": "ping"})
      );
    }, 1000 * 60)
    setIsConnect(true);
  };


  const onHandleMessage = (event: MessageEvent) => {
    const time = new Date();
    const h = time.getHours();
    const i = time.getMinutes();
    const s = time.getSeconds();
    const formatTime = [h, i, s ].join(':');
    const item = {time: formatTime, date: event.data};
    const tempArr = history.slice();
    tempArr.push(item);
    setHistory(tempArr);
    console.log('Message from server ', event.data);
  };

  useEffect(() => {
    socket.addEventListener('open', onHandleOpen);
    socket.addEventListener('message', onHandleMessage)
    // @ts-ignore
    dataShowRander.current.scrollTop = dataShowRander.current.scrollHeight;
    return () => {
      socket.removeEventListener('open', onHandleOpen)
      socket.removeEventListener('message', onHandleMessage)
    }
  })

  const onFinish = (values: any) => {
    const requestData = {
      method: values.method,
      url: values.url,
      body: values.data ? values.data : []
    };
    isConnect && socket.send(JSON.stringify(requestData));
  };

  const initUrl: string = '';
  const [url, setUrl] = useState(initUrl);
  const initMethod: string = '';
  const [method, setMethod] = useState(initMethod);
  const initData: Array<{name: string; value: string}> = [];
  const [data, setData] = useState(initData);

  const onHandleEmpty = () => {
    setUrl('');
    setMethod('');
    setData([]);
  };

  return (
    <div className={styles.testWrapper}>
      <Row justify="center">
        <Col span={24}><h1 className={styles.titleRender}>websocket 数据测试</h1></Col>
        <Col span={8}>
          <Divider>数据录入</Divider>
          <Form
            initialValues={{url, method, data}}
            onFinish={onFinish}
          >
            <Form.Item label="请求标识url" style={{ marginBottom: 0 }}>
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

        <Col span={8} offset={1}>
          <Divider>数据返回:</Divider>
          <div className={styles.showRender} ref={dataShowRander} key={1}>
            {history.map((v, i) => {
              return (<p key={i}>{JSON.stringify(v)}</p>);
            })}
          </div>
          <div className={styles.statusRender} key={2}>
            <div>连接状态:</div>
            <div className={styles.connectStatusRender} style={{backgroundColor: isConnect ? '#52c41a' : 'red'}}></div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Test;

