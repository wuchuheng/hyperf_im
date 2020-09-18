import React, {useState} from "react";
import {Form, Switch, Alert, Row, Col, Input, Button} from 'antd';
const { TextArea } = Input;

const WelcomeRender = (props: any) => {
  const [feature, setFeature] = useState(true);
  const onFeatureChange = (e: boolean) => setFeature(e);

  const [welcome, setWelcome] = useState('您好，很高兴为您服务！')
  const onWelcomeChange = (e: any) => {console.log(e)};

  const onFormfinshed = (e: any) => {
    console.log(e);
  };

  return (
    <Form
      onFinish={onFormfinshed}
      labelCol={{span: 4, offset: 1}}
      wrapperCol={{span: 12, offset: 1}}
      initialValues={{
        feature,
        welcome
      }}
    >
      <Row>
        <Col span={20} offset={2}>
          <Alert message="名片里面的信息将会被展示给对话中的客户" type="info" showIcon />
        </Col>
      </Row>
      <Form.Item
        label={'功能启用'}
        name={'feature'}
      >
        <Switch checkedChildren="开" unCheckedChildren="关" onChange={onFeatureChange} checked={feature}/>
      </Form.Item>

      <Form.Item
        label={'欢迎语'}
        name={'welcome'}
        required
      >
        <TextArea
          placeholder="请输入欢迎语"
          autoSize={{ minRows: 1, maxRows: 2 }}
          onChange={onWelcomeChange}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{offset: 10}}
      >
        <Button type="primary" htmlType="submit" shape="round">保存</Button>
      </Form.Item>

    </Form>
  );
};

export default WelcomeRender;
