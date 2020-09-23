import React, {useEffect, useState, useRef} from "react";
import {PropsState} from '../../Type';
import styles from './index.less';
import ColorPicker from './components/ColorPicker';

const ColorRender = (props: PropsState) => {
  const [theme, setTheme] = useState('#007AFF');
  const handleChangeComplete = (color: string) => {
    setTheme(color);
  };

  const [clientMessageColor, setClientMessageColor] = useState('#FFFFFF')
  const onClientMessageColornChange = (color: string) => {
    setClientMessageColor(color);
  };

  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF')
  const onBackgroundColorChange = (color:string) => {
    setBackgroundColor(color);
  };

  const [rightBarBackgroundColor, setRightBarBackgroundColor] = useState('#FFFFFF')
  const onRightBarColorChange = (color: string) => {
    setRightBarBackgroundColor(color);
  };
  return (
    <div className={`${props.className} ${styles.colorRenderWrapper}`}>
      <p>颜色选择</p>
      <div className={styles.itemsWrapper}>
        <ColorPicker color={theme} onChange={handleChangeComplete} title={'主题颜色'}/>
        <ColorPicker color={clientMessageColor} onChange={onClientMessageColornChange} title={'访客消息文字颜色'} className={styles.itemRender}/>
        <ColorPicker color={backgroundColor} onChange={onBackgroundColorChange} title={'背景颜色'} className={styles.itemRender}/>
        <ColorPicker color={rightBarBackgroundColor} onChange={onRightBarColorChange} title={'右侧信息栏背景色'} className={styles.itemRender}/>
      </div>
    </div>
  );
};

export default ColorRender;
