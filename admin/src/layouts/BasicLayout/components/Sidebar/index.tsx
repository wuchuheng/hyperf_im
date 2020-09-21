import React from "react";
import {Layout, Menu} from "antd";
import {
  CommentIcon,
  DashboardIcon,
  EngageIcon,
  HistoryIcon,
  ReportIcon, RobotIcon, ServiceIcon, SettingIcon,
  TicketsIcon
} from "../../../../components/Icons";
import { Link } from 'umi';
import style from './index.less';
import Logo from "@/layouts/BasicLayout/components/Logo";
import { history } from 'umi';

const { Header, Content, Footer, Sider } = Layout;

export default class Index extends React.Component<any, any>
{
  constructor(props: any) {
    super(props);
  }

  onCollapse = (collapsed:boolean)  => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render(): React.ReactNode {

    let defaultSelect = '';
      ['/dashboard', '/chat', '/setting'].every((v, i) => {
        if (history.location.pathname.indexOf(v) === 0) {
          defaultSelect = v;
          return false;
        }
        return true;
      });

    return (
      <>
        <Sider
          collapsible onCollapse={this.onCollapse}
          trigger={null}
          defaultCollapsed={true}
          collapsedWidth={55}
        >
          <Logo />
          <Menu theme="dark"  defaultSelectedKeys={[defaultSelect]} mode="inline" className={style.menuRender} >
            <Menu.Item key="/dashboard" icon={<DashboardIcon className={style.iconRender} /> } >
              <Link to={"/dashboard"}>首页</Link>
            </Menu.Item>
            <Menu.Item key="/chat" icon={<CommentIcon className={style.iconRender} />}>
              <Link to={"/chat"}>对话</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<TicketsIcon className={style.iconRender} />}>
              工单
            </Menu.Item>
            <Menu.Item key="4" icon={<HistoryIcon className={style.iconRender} />}>
              历史
            </Menu.Item>
            <Menu.Item key="5" icon={<ReportIcon className={style.iconRender} />}>
              报表
            </Menu.Item>
            <Menu.Item key="6" icon={<EngageIcon className={style.iconRender} />}>
              顾客
            </Menu.Item>
            <Menu.Item key="7" icon={<RobotIcon className={style.iconRender} />}>
              机器人
            </Menu.Item>
            <Menu.ItemGroup className={style.footerMenuRender}>
              <Menu.Item key="/setting" icon={<SettingIcon className={style.iconRender} /> }>
                <Link to={"/setting"}>
                  设置
                </Link>
              </Menu.Item>
              <Menu.Item key="9" icon={<ServiceIcon className={style.iconRender} />} >
                服务
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>
        </Sider>
      </>
    );
  }
}
