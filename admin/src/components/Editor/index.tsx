import React from "react";
// @ts-ignore
import {Editor as DraftEditor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import styles from './index.less';
import {BaseState} from "@/components/Editor/Type";
import FontsizeRender from "@/components/Editor/components/FontsizeRender/indcex";
import {stylesMap} from './Config';

class Editor extends React.Component<any, any>
{
  state: BaseState;

  constructor(props: any) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      fontsize: 12
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
    const {editorState} = this.state;
    const selection = editorState.getSelection();
    console.log(selection);
    this.setState({ fontsize: fontsize });
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'FONT_SIZE_' + fontsize));
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render() {
    return (
      <div className={styles.editorWrapper}>
        <div className={styles.toolsWrapper}>
          <FontsizeRender fontsize={this.state.fontsize}  onChange={this._toggleFontsize.bind(this)} />
        </div>
        <DraftEditor
          customStyleMap={stylesMap}
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Editor;
