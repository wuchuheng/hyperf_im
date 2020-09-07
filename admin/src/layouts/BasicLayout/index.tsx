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
      <Layout style={{ minHeight: '100vh' }} className={style.layoutRender}>
        <Sidebar />
        <Layout className={style.siteLayout}>
          {/*<Header className={style.siteLayoutBackground} style={{ padding: 0 }} />*/}
          <Content style={{ margin: '0 16px' }}>
            <div className={style.siteLayoutBackground} style={{ padding: 24, minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
