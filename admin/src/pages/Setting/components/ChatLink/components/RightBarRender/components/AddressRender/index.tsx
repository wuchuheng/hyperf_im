import React, {useState} from "react";
import {Card, message} from 'antd';
import styles from './index.less';
import { ExclamationIcon, HollowExclamationIcon} from "@/components/Icons";
import { copyStringToClipboard } from '@/utils/copy'

import { Row, Col, Divider, Cascader, Button, Form } from 'antd';

const AddressRender = (props: any) => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  function onChange(value: any) {
    console.log(value);
  }

  const initUrl = `${window.location.protocol}://${window.location.host}/chat/client`
  const [chatUrl, setChatUrl] = useState(initUrl);
  const onCopyHandle = (v: any) => {
    copyStringToClipboard(chatUrl);
    message.success('复制成功');
  }

  return (
    <Card title={<>
      <span className={styles.title}>链接地址</span>
      <ExclamationIcon className={styles.exclamation} />
      <span className={styles.subTitle}>顾客打开这个界面即能与你的企业进行对话</span>
    </>}
          bordered={false}
          className={styles.addressRenderWrapper}>
      <div className={styles.cardBodyWrapper }>
        <Row  gutter={[16, 16]}>
          <Col span={24}><h4>相关文档</h4></Col>
          <Col span={24}>
            <div className={styles.document}>
              <HollowExclamationIcon className={styles.iconRender} />
              聊天链接接口说明
            </div>
            <Divider/>
          </Col>

          <Col span={6}><h4>默认链接</h4></Col>
          <Col span={13} offset={5}>
            <Row gutter={[8, 0]}>
              <Col span={14}>
                <Form>
                  <Form.Item
                    label={'请指定客服分配'}
                  >
                    <Cascader
                      options={options}
                      onChange={onChange}
                      placeholder="请选择"/>
                  </Form.Item>
                </Form>
              </Col>
              <Col span={5}><Button>生成二维码</Button></Col>
              <Col span={5}><Button onClick={onCopyHandle}>复制链接</Button></Col>
            </Row>
          </Col>
          <Col span={24}>
            <div className={styles.linkRender}>
              {chatUrl}
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );

};


export default AddressRender;
