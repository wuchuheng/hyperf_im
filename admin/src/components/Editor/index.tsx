import React from "react";
// @ts-ignore
import {Editor as DraftEditor, EditorState, RichUtils, Modifier} from 'draft-js';
import 'draft-js/dist/Draft.css';
import styles from './index.less';
import {BaseState, BlockToolNameState, ToolNameState} from "@/components/Editor/Type";
import FontsizeRender from "@/components/Editor/components/FontsizeRender/indcex";
import {stylesMap, toolHeaderConfig, mapBlockStyles} from './Config';
import ColorRender from './components/ColorRender';
import {setStyle, hasStyleType} from './Server';
import BoldRender from './components/BoldRender'
import ItalicRender from './components/ItalicRender';
import UnderLineRender from './components/UnderlinedRender'
import ClearRender from './components/ClearRender';
import {UnderlIneIcon, UnorderListIcon} from "@/components/Icons";
import ButtonWrapper from "@/components/Editor/components/ButtonWrapper";

class Editor extends React.Component<any, any>
{
  state: BaseState;
  editor: any;

  constructor(props: any) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      fontsize: toolHeaderConfig.fontSize,
      color: toolHeaderConfig.color,
      backColor: toolHeaderConfig.backColor,
      fontBold: toolHeaderConfig.fontBold,
      italic: toolHeaderConfig.italic,
      underline: toolHeaderConfig.underline,
      blockStyles: []
    };
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.onChange = this.onChange.bind(this);
    this._toggleItalic = this._toggleItalic.bind(this);
    this._toggleUnderline = this._toggleUnderline.bind(this);
    this._toggleClear = this._toggleClear.bind(this);
    this._toggleBlockStyle = this._toggleBlockStyle.bind(this);
  }

  private onChange(editorState: any)
  {
    // :xxx 这一块大量遍历造成卡顿，可以只遍历一次的
    const styles = editorState.getCurrentInlineStyle();
    // 跟踪字号状态
    hasStyleType(styles, 'FONT_SIZE').then((fontsize) => {
      this.setState({fontsize: parseInt(fontsize) })
    }).catch((e) => {this.setState({fontsize: toolHeaderConfig.fontSize})});
    // 跟踪字体颜色状态
    hasStyleType(styles, 'FONT_COLOR').then((color) => {
      this.setState({color})
    }).catch((e) => {
      this.setState({ color: toolHeaderConfig.color });
    });
    // 跟踪字体背景状态
    hasStyleType(styles, 'FONT_BACK').then((backColor) => {
      this.setState({backColor})
    }).catch((e) => {this.setState({ backColor: toolHeaderConfig.backColor })});
    //跟踪加粗状态
    styles.has('FONT_BOLD') ? this.setState({fontBold: 'FONT_BOLD'}) : this.setState({fontBold: ''});
    //跟踪斜体状态
    styles.has('ITALIC') ? this.setState({ italic: 'ITALIC'}) : this.setState({italic: ''});
    // 跟踪下划线状态
    styles.has('UNDERLINE') ? this.setState({underline: 'UNDERLINE'}) : this.setState({underline: ''});

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
    const style = 'FONT_BACK_' + backColor;
    const nextEditorState = setStyle(this.state.editorState, style);
    if (nextEditorState) {
      this.setState({ backColor });
      this.onChange(nextEditorState);
    }
  }

  // 加粗
  private _toggleBold(): void
  {
    const fontBold: ToolNameState = 'FONT_BOLD';
    const nextEditorState = setStyle(this.state.editorState, fontBold);
    if (nextEditorState) {
      this.onChange(nextEditorState);
    }
  }

  // 斜体
 private _toggleItalic(): void
 {
   const fontBold: ToolNameState = 'ITALIC';
   const nextEditorState = setStyle(this.state.editorState, fontBold);
   if (nextEditorState) {
     this.onChange(nextEditorState);
   }
 }

 // 下划线
  private _toggleUnderline(): void
  {
    const nextEditorState = setStyle(this.state.editorState, 'UNDERLINE');
    if (nextEditorState) {
      this.onChange(nextEditorState);
    }
  }

  // 清除
  private _toggleClear(): void
  {
    this.onChange(EditorState.createEmpty(null))
  }
  // 块级样式
  private _toggleBlockStyle(style: BlockToolNameState): void
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
          <FontsizeRender fontsize={this.state.fontsize}  onChange={this._toggleFontsize.bind(this)} />
          <ColorRender
            stylesMap={stylesMap}
            backColor={this.state.backColor}
            color={this.state.color}
            onChangeBackColor={this._toggleFontBack.bind(this)}
            onChangeColor={this._toggleFontColor.bind(this)}
          />
          <BoldRender
            fontBold={this.state.fontBold}
            onChange={() => this._toggleBold()}
          />
          <ItalicRender
            onChange={this._toggleItalic}
            italic={this.state.italic}
          />
          <UnderLineRender
            onChange={this._toggleUnderline}
            underline={this.state.underline}
          />
          <ClearRender onChange={this._toggleClear} />
          {mapBlockStyles.map((v, i) => {
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
