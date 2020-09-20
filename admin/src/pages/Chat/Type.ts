import * as Icons from "@/components/Icons";

// 图标标题
interface IconTiteState {title: string, icon: keyof  typeof Icons};

// 来源别名
export type RerferrerKeyType = 'explicit'| 'thirdParty'| 'baidu'| '360'| 'sogo'| 'sm'| 'biyin'| 'google'| 'bcp';
// 来源别名映射标题图标
export const rerferrerMapTitleIcon: Record<RerferrerKeyType,IconTiteState >= {
  explicit: {title: '直接访问', icon: 'ExplicitIcon'},
  thirdParty: {title: '第三方', icon: 'ExplicitIcon'},
  baidu: {title: '百度', icon: 'ExplicitIcon'},
  '360': {title: '360', icon: 'ExplicitIcon'},
  sogo: {title: '搜狗', icon: 'ExplicitIcon'},
  sm: {title: '神马', icon: 'ExplicitIcon'},
  biyin: {title: '必应', icon: 'ExplicitIcon'},
  google: {title: '谷歌', icon: 'ExplicitIcon'},
  bcp: {title: '百度bcp', icon: 'ExplicitIcon'},
}

// 系统别名
export type SystemKeyType = 'windows' | 'mac' | 'linux' | 'iphone' | 'android' | 'other'
// 系统别名映射图标
export const systemMapIcon: Record<SystemKeyType, {icon: string}> = {
  windows: { icon: 'ExplicitIcon'},
  mac: { icon: 'ExplicitIcon'},
  linux: { icon: 'ExplicitIcon'},
  iphone: { icon: 'ExplicitIcon'},
  android: { icon: 'ExplicitIcon'},
  other: { icon: 'ExplicitIcon'}
}

export type BrowerKeyType = 'Opera' | 'Safari' | 'Firefox' | 'Chrome' | 'Other' ;
// 浏览器别名映射图标
export const browerMapIcon: Record<BrowerKeyType, {icon: string}> = {
  Opera: { icon: 'ExplicitIcon'},
  Chrome: { icon: 'ExplicitIcon'},
  Firefox: { icon: 'ExplicitIcon'},
  Safari: { icon: 'ExplicitIcon'},
  Other: { icon: 'ExplicitIcon'}
}

