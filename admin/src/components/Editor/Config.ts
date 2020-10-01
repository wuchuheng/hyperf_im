// 这里保存一些给子组件用的配置。由于在当前组件用不到，子组件又共同需要，所以放在这里

// 工具栏目配置
import ex from "umi/dist";
import {ToolNameState} from "@/components/Editor/Type";

export const toolHeaderConfig = {
  focusBackgoundColor: '#f2f2f2',
  backColor: 'rgb(255, 255, 255)',
  color: '#000000'
}

// 自定义样式

export const stylesMap = {
  // 字体大小
  'FONT_SIZE_12': { fontSize: '12px' },
  'FONT_SIZE_14': { fontSize: '14px' },
  'FONT_SIZE_16': { fontSize: '16px' },
  'FONT_SIZE_18': { fontSize: '18px' },
  'FONT_SIZE_20': { fontSize: '20px' },
  'FONT_SIZE_24': { fontSize: '24px' },
  'FONT_SIZE_28': { fontSize: '28px' },
  'FONT_SIZE_30': { fontSize: '30px' },
  'FONT_SIZE_32': { fontSize: '32px' },
  'FONT_SIZE_36': { fontSize: '36px' },
  'FONT_SIZE_40': { fontSize: '40px' },
  'FONT_SIZE_48': { fontSize: '48px' },
  'FONT_SIZE_56': { fontSize: '56px' },
  'FONT_SIZE_64': { fontSize: '64px' },
  'FONT_SIZE_72': { fontSize: '72px' },
  'FONT_SIZE_96': { fontSize: '96px' },
  'FONT_SIZE_120': { fontSize: '120px' },
  'FONT_SIZE_144': { fontSize: '144px' },

  //  字体颜色
  'FONT_COLOR_#000000': { color: '#000000'},
  'FONT_COLOR_#333333': { color: '#333333'},
  'FONT_COLOR_#666': { color: '#666'},
  'FONT_COLOR_#999': { color: '#999'},
  'FONT_COLOR_#ccc': { color: '#ccc'},
  'FONT_COLOR_#ffffff': { color: '#ffffff'},
  'FONT_COLOR_#a0c5e8': { color: '#a0c5e8'},
  'FONT_COLOR_#61a951': { color: '#61a951'},
  'FONT_COLOR_#16a085': { color: '#16a085'},
  'FONT_COLOR_#07a9fe': { color: '#07a9fe'},
  'FONT_COLOR_#003ba5': { color: '#003ba5'},
  'FONT_COLOR_#8e44ad': { color: '#8e44ad'},
  'FONT_COLOR_#f32784': { color: '#f32784'},
  'FONT_COLOR_#c0392b': { color: '#c0392b'},
  'FONT_COLOR_#d35400': { color: '#d35400'},
  'FONT_COLOR_#f39c12': { color: '#f39c12'},
  'FONT_COLOR_#fdda00': { color: '#fdda00'},

  //  字体背景
  'FONT_BACK_#000000': { backgroundColor: '#000000'},
  'FONT_BACK_#333333': { backgroundColor: '#333333'},
  'FONT_BACK_#666': { backgroundColor: '#666'},
  'FONT_BACK_#999': { backgroundColor: '#999'},
  'FONT_BACK_#ccc': { backgroundColor: '#ccc'},
  'FONT_BACK_#ffffff': { backgroundColor: '#ffffff'},
  'FONT_BACK_#a0c5e8': { backgroundColor: '#a0c5e8'},
  'FONT_BACK_#61a951': { backgroundColor: '#61a951'},
  'FONT_BACK_#16a085': { backgroundColor: '#16a085'},
  'FONT_BACK_#07a9fe': { backgroundColor: '#07a9fe'},
  'FONT_BACK_#003ba5': { backgroundColor: '#003ba5'},
  'FONT_BACK_#8e44ad': { backgroundColor: '#8e44ad'},
  'FONT_BACK_#f32784': { backgroundColor: '#f32784'},
  'FONT_BACK_#c0392b': { backgroundColor: '#c0392b'},
  'FONT_BACK_#d35400': { backgroundColor: '#d35400'},
  'FONT_BACK_#f39c12': { backgroundColor: '#f39c12'},
  'FONT_BACK_#fdda00': { backgroundColor: '#fdda00'}
};

// 通过一个样式类型获取同类下的所以样式
export const getStylesByType = (type: ToolNameState) => {
  const colors = Object.keys(stylesMap)
    .filter(v =>  v.includes(type, 0)) as Array<keyof typeof stylesMap>;
  const colorObject = Object.assign({});
  colors.forEach((v ) => {
    colorObject[v] = stylesMap[v];
  })
  return colorObject;
};

// 工具类名全集
export const toolNames: Array<ToolNameState> =  [
  'FONT_SIZE',
  'FONT_COLOR',
  'FONT_BACK'
];
