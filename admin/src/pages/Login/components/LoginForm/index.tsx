import React from "react";
import {Button, Checkbox, Form, Input} from "antd";
import styles from './index.less';
import {UserModelState, Loading ,connect} from 'umi';
import { history } from 'umi';
import {BaseState } from './Type';

class LoginForm extends React.Component<any, any>
{

  state: BaseState = {
    rememberMe: true,
    username: 'root@wuchuheng.com',
    password: '123456'
  }

  constructor(props: any) {
    super(props);
  }

  /**
   * 登录
   */
  onFinish(values: BaseState)
  {
    this.props.dispatch({
      type: 'user/login',
      payload: values
    }).then((res: boolean) => {
        history.push('/dashboard');
    });
  };

  render() {
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    const tailLayout = {
      wrapperCol: { offset: 0, span: 24 },
    };
    const onFinishFailed = (errorInfo: any) => {
    };

    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{remember: this.state.rememberMe, username: this.state.username, password: this.state.password }}
        onFinish={(v) => this.onFinish(v)}
        onFinishFailed={onFinishFailed}
        style={{width: '100%'}}
      >
        <Form.Item
          label="账号"
          name="username"
          rules={[
            {required: true, message: '请输入您的邮箱账号', },
            {message: '请输入正确的邮箱', pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ },
          ]}
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

const mapPropsToState = ({user, loading}: {user: UserModelState, loading: Loading}) => {
  return {
    user: user,
    loading: loading
  };
}

export default connect(mapPropsToState)(LoginForm);

