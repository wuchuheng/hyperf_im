import React from "react";
import {Button, Checkbox, Form, Input} from "antd";
// @ts-ignore
import styles from './index.less';


class LoginForm extends React.Component<any, any>
{
  render() {
    const layout = {
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
    };
    const tailLayout = {
      wrapperCol: { offset: 0, span: 24 },
    };
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{remember: true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{width: '100%'}}
      >
        <Form.Item
          label="账号"
          name="username"
          rules={[{required: true, message: '请输入您的邮箱账号'}]}
        >
          <Input placeholder={'请输入您的邮箱账号'}
                 className={styles.itemRender}
          />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"

          rules={[{required: true, message: '请输入您的密码'}]}
        >
          <Input.Password placeholder={'请输入您的密码'}
                          className={styles.itemRender}
          />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <Form.Item {...tailLayout} className={`${styles.loginButtonWrapper}`}
        >
          <Button type="primary" htmlType="submit" className={`${styles.loginButton} ${styles.itemRender}`}>
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default LoginForm;
