import React from "react";
import style from './index.less'
// @ts-ignore
import logo from "@/assets/images/default-avatar.jpg";
import { Menu, Dropdown, Switch, Badge } from 'antd';
import {connect} from 'umi'


const Logo = class Logo extends React.Component<any, any>
{
  constructor(props:{}) {
    super(props);
  }

  // 登出
  logout()
  {
    this.props.dispatch({type: 'user/logout'});
  }

  menu = (
  <Menu className={style.menuWraper}>
    <div className={`${style.menuItem} ${style.onlineStatus}`}>
      <div className={style.onlineStatusItem}>在线状态</div>
      <div className={`${style.onlineStatusItem} ${style.onlineStatusWrapper}`} >
        <div>
          <Badge status={'success'} offset={[-35, 12]} size={'default'}>
            在线
          </Badge>
        </div>
        <div>
          <Switch defaultChecked />
        </div>
      </div>
    </div>
    <Menu.Divider/>
    <div className={style.menuItem}>账号信息</div>
    <div className={style.menuItem}>网络诊断</div>
    <Menu.Divider/>
    <div className={style.menuItem} onClick={() => this.logout()}>退出当前登录状态</div>
    <div className={style.menuItem}>退出所有设备登录状态</div>
  </Menu>
);


  render() {
    return (
      <Dropdown overlay={this.menu} placement="topRight">
        <div className={style.logo}>
          <Badge status={'success'} offset={[-5, 30]}>
            <img src={logo} />
          </Badge>
        </div>
      </Dropdown>
  );
  }
}

export default connect()(Logo);
