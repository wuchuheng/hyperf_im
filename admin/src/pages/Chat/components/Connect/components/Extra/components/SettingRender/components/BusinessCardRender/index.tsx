import React from "react";
import { Form, Input, Button } from 'antd';
const {TextArea} = Input;
import styles from './index.less';

const BusinessCardRender = (props: any) => {
  return (
    <Form
      wrapperCol={{span: 18}}
      labelCol={{span: 4}}
      className={styles.formRender}
    >
      <Form.Item
        label={'名称'}
        required
        name={'name'}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={'自定义签名'}
        name={'nickname'}
      >
        <TextArea />
      </Form.Item>

      <Form.Item
        label={'座机'}
        name={'tel'}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={'手机'}
        name={'phone'}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={'邮箱'}
        name={'email'}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={'QQ'}
        name={'qq'}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={'微信'}
        name={'wechat'}
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{offset: 10}}
      >
        <Button type="primary" htmlType="submit" shape="round">保存</Button>
      </Form.Item>

    </Form>
  );
};

export default BusinessCardRender;
