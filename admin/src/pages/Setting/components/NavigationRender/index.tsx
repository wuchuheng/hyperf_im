import React from "react";
import { Menu } from 'antd';
import styles from './index.less'
import {TeamIcon, ConnectIcon, ChatIcon, UserIcon, TicketIcon, CallbackIcon, CalloutIcon} from "@/components/Icons";
import {history, Link} from 'umi';
import {findLikeItemInItems} from "@/utils/common";
import {GroupItemsState, GroupItemState, ItemState} from './Types';

const { SubMenu } = Menu;

const NavigationRender = (props: any) => {
  const handleClick = (e: any) => {
    console.log('click ', e);
  };

  const groupItems: GroupItemsState = props.menuItems;

  groupItems.map((v, i) => {
    v.items.map((item, itemIndex) => {
      const route = v.key + '/' + item.key;
      groupItems[i].items[itemIndex].key = route;
      groupItems[i].items[itemIndex].render = (<Link to={route}>{item.render}</Link>)
    });
  });

  const getDefaultSelect = () => {
    const allKeys = [] as Array<string>;
    groupItems.map((v) => {
      v.items.map((item) => {
        allKeys.push(item.key);
      });
    });
    let defaultSelect = findLikeItemInItems(allKeys, history.location.pathname) || '';
    return defaultSelect;
  };

  const mapItems = (item: ItemState, keyPrefix: string) => {
    return (<Menu.Item key={item.key}>{item.render}</Menu.Item>)
  };
  const mapGroupItemRender = groupItems.map((groutItem: GroupItemState) => {
    return (
      <SubMenu key={groutItem.key} title={groutItem.groupTitle} >
        {groutItem.items.map((item) => mapItems(item, groutItem.key))}
      </SubMenu>
    );
  });

  const groupKeys = groupItems.map((v) => {
    return v.key;
  });

  return (
  <Menu
    onClick={handleClick}
      defaultSelectedKeys={ [getDefaultSelect()] }
      defaultOpenKeys={groupKeys}
      mode="inline"
      className={styles.menuWrapper}
    >
    {mapGroupItemRender}
    </Menu>
  );
}

export default NavigationRender;
