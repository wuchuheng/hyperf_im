import React from "react";
// @ts-ignore
import {Editor as DraftEditor, EditorState, RichUtils, Modifier} from 'draft-js';
import 'draft-js/dist/Draft.css';
import styles from './index.less';
import {BaseState} from "@/components/Editor/Type";
import FontsizeRender from "@/components/Editor/components/FontsizeRender/indcex";
import {stylesMap} from './Config';
import ColorRender from './components/ColorRender';
import {toolHeaderConfig, getColors} from './Config';
import {Button} from 'antd';

class Editor extends React.Component<any, any>
{
  state: BaseState;
  editor: any;

  constructor(props: any) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      fontsize: 12,
      color: toolHeaderConfig.color,
      backColor: toolHeaderConfig.backColor
    };
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  private onChange(editorState: any)
  {
    this.setState({editorState})
  };

  handleKeyCommand(command: any, editorState: any) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  // 修改字号
  private _toggleFontsize(fontsize: number): void
  {
    this.setState({ fontsize: fontsize });
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'FONT_SIZE_' + fontsize));
  }

  // 字体颜色
  private _toggleFontColor(color: string): void
  {
    const toggledColor = 'FONT_COLOR_' + color;
    const editorState = this.state.editorState;
    const selection = editorState.getSelection();

    // Let's just allow one color at a time. Turn off all active colors.
    const nextContentState = Object.keys(getColors())
      .reduce((contentState, color) => {
        return Modifier.removeInlineStyle(contentState, selection, color)
      }, editorState.getCurrentContent());

    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    );

    const currentStyle = editorState.getCurrentInlineStyle();
    console.log(currentStyle)

    // Unset style override for current color.
    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce((state: any, color: any) => {
        return RichUtils.toggleInlineStyle(state, color);
      }, nextEditorState);
    }

    // If the color is being toggled on, apply it.
    if (!currentStyle.has(toggledColor)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        toggledColor
      );
    }
    console.log(nextEditorState.getCurrentInlineStyle().toString())

    this.onChange(nextEditorState);
    // this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'FONT_COLOR_' + color));

    this.setState({ color });
  }

  // 字体背景
  private _toggleFontBack(backColor: string): void
  {
    this.setState({ backColor });
  }

  private _onMouseDown(e: any)
  {
    e.preventDefault();
  }

  render() {
    return (
      <div
        className={styles.editorWrapper}
      >
        <div className={styles.toolsWrapper}>
          <FontsizeRender fontsize={this.state.fontsize}  onChange={this._toggleFontsize.bind(this)} />
          <ColorRender
            stylesMap={stylesMap}
            backColor={this.state.backColor}
            color={this.state.color}
            onChangeBackColor={this._toggleFontBack.bind(this)}
            onChangeColor={this._toggleFontColor.bind(this)}
          />
        </div>
        <DraftEditor
          customStyleMap={stylesMap}
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          ref={(ref: any) => this.editor = ref }
        />
      </div>
    );
  }
}

export default Editor;
