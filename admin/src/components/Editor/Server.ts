// @ts-ignore
import {Editor as DraftEditor, EditorState, RichUtils, Modifier} from 'draft-js';
import {getFontSize, getColors}  from './Config';
import {ToolNameState} from './Type';

// 设置样式
export const setStyle = (editorState: any, style: string) =>
{
  let type: ToolNameState;
  // 一种类型的多个属性的样式对象
  let styles:Object;

  if (style.includes('FONT_SIZE_', 0)) {
    // 字号
    type = 'FONT_SIZE';
     styles = getFontSize();
  } else if (style.includes('FONT_COLOR_', 0)) {
    // 颜色
    type = 'FONT_COLOR';
    styles = getColors();
  } else {
    return;
  }
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
    nextEditorState = currentStyle.reduce((state: any, style: string) => {
      return getStyleTypeByName(style) === type ?
        RichUtils.toggleInlineStyle(
          state,
          style
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
  if (type.includes('FONT_SIZE', 0)) {
    return 'FONT_SIZE';
  } else if (type.includes('FONT_COLOR', 0)) {
    return 'FONT_COLOR';
  }
  return false;
};
