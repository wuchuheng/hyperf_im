import React from "react";
import { Menu } from 'antd';
import styles from './index.less'
import {TeamIcon, ConnectIcon, ChatIcon, UserIcon, TicketIcon, CallbackIcon, CalloutIcon} from "@/components/Icons";

const { SubMenu } = Menu;

const NavigationRender = (props: any) => {
  const handleClick = (e: any) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={handleClick}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={[
        '/setting/team',
        '/setting/connect',
        '/setting/chat',
        '/setting/client',
        '/setting/ticket',
        '/setting/callout',
        '/setting/callback'
      ]}
      mode="inline"
      className={styles.menuWrapper}
    >
      <SubMenu
        key="/setting/team"
        title={<span><TeamIcon /><span>团队</span></span>}
      >
          <Menu.Item key="/setting/team/info">团队管理</Menu.Item>
          <Menu.Item key="/setting/team/security">团队安全设置</Menu.Item>
      </SubMenu>

      <SubMenu key="/setting/connect" icon={<ConnectIcon />} title="接入">
        <Menu.Item key="/setting/connect/web-widget">网页插件</Menu.Item>
        <Menu.Item key="/setting/connect/chat-link">聊天链接</Menu.Item>
        <Menu.Item key="/setting/connect/sdk">SDK</Menu.Item>
        <Menu.Item key="/setting/connect/wechat">微信</Menu.Item>
        <Menu.Item key="/setting/connect/weibo">微博</Menu.Item>
        <Menu.Item key="/setting/connect/wechat-program">微信小程序</Menu.Item>
        <Menu.Item key="/setting/connect/toutiao">今日头条</Menu.Item>
        <Menu.Item key="/setting/connect/bcp">百度bcp</Menu.Item>
        <Menu.Item key="/setting/connect/kuaishou">快手</Menu.Item>
        <Menu.Item key="/setting/connect/tiktok">抖音</Menu.Item>
      </SubMenu>

      <SubMenu key="/setting/chat" title={ <span> <ChatIcon /> <span>对话</span> </span> } >
        <Menu.Item key="/setting/chat/marketing">智能引导</Menu.Item>
        <Menu.Item key="/setting/chat/auto-message">自动消息</Menu.Item>
        <Menu.Item key="/setting/chat/question">询前表单</Menu.Item>
        <Menu.Item key="/setting/chat/queue">顾客排队</Menu.Item>
        <Menu.Item key="/setting/chat/allocation">对话分配</Menu.Item>
        <Menu.Item key="/setting/chat/rule">对话规则</Menu.Item>
        <Menu.Item key="/setting/chat/quick-reply">快捷回复</Menu.Item>
        <Menu.Item key="/setting/chat/tag">对话标签</Menu.Item>
        <Menu.Item key="/setting/chat/evaluation">客服评价</Menu.Item>
      </SubMenu>

      <SubMenu key="/setting/client" title={ <span><UserIcon /><span>顾客</span></span>} >
        <Menu.Item key="/setting/client/setting">顾客管理</Menu.Item>
        <Menu.Item key="/setting/client/tag">顾客标签</Menu.Item>
      </SubMenu>

      <SubMenu key="/setting/ticket" title={ <span><TicketIcon /><span>工单</span></span>} >
        <Menu.Item key="/setting/ticket/setting">顾客管理</Menu.Item>
        <Menu.Item key="/setting/ticket/type">工单分类</Menu.Item>
        <Menu.Item key="/setting/ticket/rule">自动规则 </Menu.Item>
      </SubMenu>

      <SubMenu key="/setting/callback" title={ <span><CallbackIcon /><span>回呼</span></span>} >
        <Menu.Item key="/setting/callback/setting">回呼设置</Menu.Item>
        <Menu.Item key="/setting/callback/rule">回呼数据</Menu.Item>
      </SubMenu>

      <SubMenu key="/setting/callout" title={ <span><CalloutIcon /><span>外呼</span></span>} >
        <Menu.Item key="/setting/callout/setting">外呼设置</Menu.Item>
        <Menu.Item key="/setting/callout/rule">外呼数据</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default NavigationRender;
