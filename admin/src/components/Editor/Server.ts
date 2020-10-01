// @ts-ignore
import {Editor as DraftEditor, EditorState, RichUtils, Modifier} from 'draft-js';
import {getStylesByType, toolNames}  from './Config';
import {ToolNameState} from './Type';

// 设置样式
export const setStyle = (editorState: any, style: string) =>
{
  let type: ToolNameState;
  toolNames.every((v) => {
    if (style.includes(v, 0)) {
      type = v;
      return false;
    } else {
      return true;
    }
  });

  // @ts-ignore
  if (!type)  return ;
  // 获取样式对象
  const styles = getStylesByType(type);
  const selection = editorState.getSelection();
  const currentStyle = editorState.getCurrentInlineStyle();
  // Let's just allow one fontSize at a time. Turn off all active colors.
  const nextContentState = Object.keys(styles)
    .reduce((contentState, fontSize) => {
      return Modifier.removeInlineStyle(contentState, selection, fontSize)
    }, editorState.getCurrentContent());

  let nextEditorState = EditorState.push(
    editorState,
    nextContentState,
    'change-inline-style'
  );

  // 把已经有的同类样式再设置一次，来取消掉
  if (selection.isCollapsed()) {
    nextEditorState = currentStyle.reduce((state: any, existStyle: string) => {
      return getStyleTypeByName(existStyle) === type ?
        RichUtils.toggleInlineStyle(
          state,
          existStyle
        )
        : state;
    }, nextEditorState);
  }
  // If the color is being toggled on, apply it.
  if (!currentStyle.has(style)) {
    nextEditorState = RichUtils.toggleInlineStyle(
      nextEditorState,
      style
    );
  }
  return nextEditorState;
}

// 根据样式名来获取样式的类型，用于同类型样式剔除
export const getStyleTypeByName = (type: string): ToolNameState | false => {
  let isExists: boolean = false;
  let res: ToolNameState | false = false;
  toolNames.every((v) => {
    if (type.includes(v, 0)) {
      res = v;
      return false;
    } else {
      return true;
    }
  });
  return res;
};
