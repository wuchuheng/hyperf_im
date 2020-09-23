import React, {useState} from "react";
import styles from "./index.less";
import {Popover} from "antd";
// @ts-ignore
import { SketchPicker } from 'react-color';
import {PropsState} from './Type';


const ColorPicker = (props: PropsState) => {
  const handleChangeComplete = (color: any) => {
    props.onChange(color.hex);
  };
  const className = props.className ? props.className : '';
  return (
      <div className={`${styles.colorPickerWrapper} ${className}`}>
        <div className={styles.leftRender}>
          {props.title}
        </div>
        <Popover content={
          <SketchPicker
            color={props.color}
            onChangeComplete={ handleChangeComplete }
          />
        }>
          <div className={styles.rightRender} style={{backgroundColor: props.color}}></div>
        </Popover>
      </div>
  );
};

export default ColorPicker;
