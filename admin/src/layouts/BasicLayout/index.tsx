import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import style from './index.less'

import Sidebar from "./components/Sidebar";

const { Content, Footer } = Layout;

export default class BasicLayout extends React.Component<any, any>
{

  state = {
    collapsed: false,
  };

  onCollapse = (collapsed:boolean)  => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render(): React.ReactNode {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          {/*<Header className={style.siteLayoutBackground} style={{ padding: 0 }} />*/}
          <Content className={style.contentWrapper}>
              {this.props.children}
          </Content>
          {/*<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>*/}
        </Layout>
      </Layout>
    );
  }
}
