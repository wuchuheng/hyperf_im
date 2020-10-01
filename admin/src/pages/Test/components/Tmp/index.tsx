import React from "react";
import styles from './index.less';
import DevEditor  from '@/components/Editor';
// @ts-ignore
import {Editor, EditorState, Modifier, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';

class Tmp extends React.Component<any, any>
{
  render() {
    return (
      <div className={styles.tmpWrapper}>
        <DevEditor />
      </div>
    );
  }
}

export default Tmp;
