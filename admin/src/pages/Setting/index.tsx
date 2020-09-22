import React from "react";
import {Row, Col} from 'antd';
import styles from './index.less';
import {history} from 'umi';
import NotFoundRender from "@/pages/Setting/components/NotFoundRender";
import NavigationRender from './components/NavigationRender';
import Error404Page from "@/pages/Error/Error404Page";
import {GroupItemsState} from "@/pages/Setting/components/NavigationRender/Types";
import {CallbackIcon, CalloutIcon, ChatIcon, ConnectIcon, TeamIcon, TicketIcon, UserIcon} from "@/components/Icons";
import BuildingPage from "@/pages/Error/BuildingPage";
import { pathToRegexp, match, parse, compile } from 'path-to-regexp';

const Setting =(props: any) => {


  const menuItems: GroupItemsState = [
    {
      groupTitle: (<span><TeamIcon /><span>团队</span></span>),
      key:"/setting/team",
      items: [
        {
          key: 'info',
          render: '团队管理'
        },
        {
          key: 'security',
          render: '团队安全设置'
        },
      ]
    },
    {
      groupTitle: (<span><ConnectIcon /><span>接入</span></span>),
      key: '/setting/connect',
      items: [
        {
          key: 'web-widget',
          render: '网页插件'
        },
        {
          key: 'chat-link/default',
          render: '聊天链接'
        },
        {
          key: 'sdk',
          render: 'SDK'
        },
        {
          key: 'wechat',
          render: '微信'
        },
        {
          key: 'weibo',
          render: '微博'
        },
        {
          key: 'wechat-program',
          render: '微信小程序'
        },
        {
          key: 'toutiao',
          render: '今日头条'
        },
        {
          key: 'bcp',
          render: '百度bcp'
        },
        {
          key: 'kuaishou',
          render: '快手'
        },
        {
          key: 'tiktok',
          render: '抖音'
        },
      ]
    },
    {
      groupTitle: (<span><ChatIcon /><span>对话</span></span>),
      key: "/setting/chat",
      items: [
        {
          key: 'marketing',
          render: '智能引导'
        },
        {
          key: 'auto-message',
          render: '自动消息'
        },
        {
          key: 'question',
          render: '询前表单'
        },
        {
          key: 'queue',
          render: '顾客排队'
        },
        {
          key: 'allocation',
          render: '对话分配'
        },
        {
          key: 'rule',
          render: '对话规则'
        },
        {
          key: 'quick-reply',
          render: '快捷回复'
        },
        {
          key: 'tag',
          render: '对话标签'
        },
        {
          key: 'evaluation',
          render: '客服评价'
        },
      ]
    },
    {
      groupTitle: (<span><UserIcon /><span>顾客</span></span>),
      key: "/setting/client",
      items: [
        {
          key: 'setting',
          render: '顾客管理'
        },
        {
          key: 'tag',
          render: '顾客标签'
        },
      ]
    },
    {
      groupTitle: (<span><TicketIcon /><span>工单</span></span>),
      key: "/setting/ticket",
      items: [
        {
          key: 'setting',
          render: '顾客管理'
        },
        {
          key: 'type',
          render: '工单分类'
        },
        {
          key: 'rule',
          render: '自动规则 '
        },
      ]
    },
    {
      groupTitle: (<span><CallbackIcon /><span>回呼</span></span>),
      key: "/setting/callback",
      items: [
        {
          key: 'setting',
          render: '回呼设置'
        },
        {
          key: 'rule',
          render: '回呼数据'
        },
      ]
    },
    {
      groupTitle: (<span><CalloutIcon /><span>外呼</span></span>),
      key: "/setting/callout",
      items: [
        {
          key: 'setting',
          render: '外呼设置'
        },
        {
          key: 'rule',
          render: '外呼数据'
        },
      ]
    }
  ];

  const allPaths = [] as Array<string>;
  menuItems.map((v) => {
    v.items.map((item) => {
      const route = v.key + '/' + item.key;
      allPaths.push(route);
    });
  });

 let children = undefined;
  if (history.location.pathname === '/setting') {
    children = <NotFoundRender />;
  } else if (allPaths.indexOf(history.location.pathname) !== -1) {
    // 链接有些是建设中的，有些是已经有的，这里进行区分，符合路由配置的直接去，不符合的则提示建设中...
    const countPatchChildren = props.route.routes.findIndex((routeInfo: any) => {
      const matchFun = match(routeInfo.path, { decode: decodeURIComponent});
      return matchFun(history.location.pathname) === false ? false : true;
    });
    children = countPatchChildren > -1 ? props.children : <BuildingPage />;
  } else {
    children = <Error404Page />
  }

  return (
    <Row>
      <Col span={4}>
        <div className={styles.div1} >
          <NavigationRender menuItems={menuItems}/>
        </div>
      </Col >
      <Col span={20}>
        {children}
      </Col>
    </Row>
  );
};

export default Setting;
