import React from "react";
// @ts-ignore
import {Editor as DraftEditor, EditorState, RichUtils, Modifier} from 'draft-js';
import 'draft-js/dist/Draft.css';
import styles from './index.less';
import {BaseState, BlockStyleState, InlineStyleState, ToolNameState} from "@/components/Editor/Type";
import FontsizeRender from "@/components/Editor/components/FontsizeRender/indcex";
import {
  inlineStyles,
  blockStylesMap,
  inlineStylesMap
} from './Config';
import ColorRender from './components/ColorRender';
import {setStyle, hasStyleType} from './Server';
import ClearRender from './components/ClearRender';
import ButtonWrapper from "@/components/Editor/components/ButtonWrapper";

class Editor extends React.Component<any, any>
{
  state: BaseState;
  editor: any;

  constructor(props: any) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      blockStyles: [],
      inlineStyles: []
    };
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.onChange = this.onChange.bind(this);
    this._toggleClear = this._toggleClear.bind(this);
    this._toggleBlockStyle = this._toggleBlockStyle.bind(this);
    this._toggleInlineStyle = this._toggleInlineStyle.bind(this);
  }

  private onChange(editorState: any)
  {
    const styles = editorState.getCurrentInlineStyle();
    if (styles.count()) {
      const inlineStyles:Array<InlineStyleState> = [];
      styles.map((v: InlineStyleState) => {
        inlineStyles.push(v);
      });
      this.setState({inlineStyles});
    } else {
      this.setState({inlineStyles: []});
    }
    // // 跟踪字体颜色状态
    // hasStyleType(styles, 'FONT_COLOR').then((color) => {
    //   this.setState({color})
    // }).catch((e) => {
    //   this.setState({ color: toolHeaderConfig.color });
    // });

    // 跟踪字体背景状态
    // hasStyleType(styles, 'FONT_BACK').then((backColor) => {
    //   this.setState({backColor})
    // }).catch((e) => {this.setState({ backColor: toolHeaderConfig.backColor })});

    // 更新块级样式

    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();
    this.state.blockStyles
    this.setState({
      blockStyles: [blockType]
    })
    this.setState({ editorState})
  };

  handleKeyCommand(command: any, editorState: any)
 {
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
    const style = 'FONT_BACK_' + backColor;
    const nextEditorState = setStyle(this.state.editorState, style);
    if (nextEditorState) {
      this.setState({ backColor });
      this.onChange(nextEditorState);
    }
  }

  // 清除
  private _toggleClear(): void
  {
    this.onChange(EditorState.createEmpty(null))
  }

  // 行内样式
  private _toggleInlineStyle(style: InlineStyleState): void
  {
    const nextEditorState = setStyle(this.state.editorState, style);
    if (nextEditorState) {
      // this.setState({ backColor });
      this.onChange(nextEditorState);
    }
  }

  // 块级样式
  private _toggleBlockStyle(style: BlockStyleState): void
  {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        style
      )
    );
  }

  render() {
    return (
      <div
        className={styles.editorWrapper}
      >
        <div className={styles.toolsWrapper}>
          <FontsizeRender inlineStyles={this.state.inlineStyles}  onChange={this._toggleFontsize.bind(this)} />
          {/*<ColorRender*/}
          {/*  stylesMap={inlineStyles}*/}
          {/*  backColor={this.state.backColor}*/}
          {/*  color={this.state.color}*/}
          {/*  onChangeBackColor={this._toggleFontBack.bind(this)}*/}
          {/*  onChangeColor={this._toggleFontColor.bind(this)}*/}
          {/*/>*/}
          {inlineStylesMap.map((v, i) => {
            return (
              <ButtonWrapper
                key={i}
                label={v.label}
                isActive={this.state.inlineStyles.indexOf(v.style) !== -1}
                style={v.style}
                onToggle={this._toggleInlineStyle}>
                <v.icon/>
              </ButtonWrapper>
            );
          })}
          <ClearRender onChange={this._toggleClear} />
          {blockStylesMap.map((v, i) => {
            return (
              <ButtonWrapper
                key={i}
                label={v.label}
                isActive={this.state.blockStyles.indexOf(v.style) !== -1}
                style={v.style}
                onToggle={this._toggleBlockStyle}>
                <v.icon/>
              </ButtonWrapper>
            );
          })}
        </div>
        <DraftEditor
          customStyleMap={inlineStyles}
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
