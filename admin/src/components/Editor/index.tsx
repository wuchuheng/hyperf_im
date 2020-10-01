import React from "react";
// @ts-ignore
import {Editor as DraftEditor, EditorState, RichUtils, Modifier} from 'draft-js';
import 'draft-js/dist/Draft.css';
import styles from './index.less';
import {BaseState} from "@/components/Editor/Type";
import FontsizeRender from "@/components/Editor/components/FontsizeRender/indcex";
import {stylesMap} from './Config';
import ColorRender from './components/ColorRender';
import {toolHeaderConfig, getColors, getFontSize} from './Config';
import {setStyle} from './Server';

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
    const style = 'FONT_SIZE_' + fontsize;
    const nextEditorState = setStyle(this.state.editorState, style);
    if (nextEditorState) {
      this.setState({'fontsize': fontsize});
      this.onChange(nextEditorState);
    }
  }

  // 字体颜色
  private _toggleFontColor(color: string): void
  {
    const style = 'FONT_COLOR_' + color;
    const nextEditorState = setStyle(this.state.editorState, style);
    if (nextEditorState) {
      this.setState({'color':  color});
      this.onChange(nextEditorState);
    }
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
