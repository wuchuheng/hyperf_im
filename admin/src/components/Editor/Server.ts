// @ts-ignore
import {Editor as DraftEditor, EditorState, RichUtils, Modifier} from 'draft-js';
import {getFontSize, getColors}  from './Config';

// 设置样式
export const setStyle = (editorState: any, style: string) =>
{
  // 字号
  if (/FONT_SIZE_\d+$/.test(style)) {
    const styles = getFontSize();
  } else if (/FONT_COLOR_#\w+$/.test(style)) {
    // 颜色
    const styles = getColors();
  } else {
    return;
  }
  const selection = editorState.getSelection();

  // Let's just allow one fontSize at a time. Turn off all active colors.
  const nextContentState = Object.keys(getFontSize())
    .reduce((contentState, fontSize) => {
      return Modifier.removeInlineStyle(contentState, selection, fontSize)
    }, editorState.getCurrentContent());

  let nextEditorState = EditorState.push(
    editorState,
    nextContentState,
    'change-inline-style'
  );

  const currentStyle = editorState.getCurrentInlineStyle();
  // Unset style override for current color.
  if (selection.isCollapsed()) {
    nextEditorState = currentStyle.reduce((state: any, fontSize: any) => {
      return RichUtils.toggleInlineStyle(state, fontSize);
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
