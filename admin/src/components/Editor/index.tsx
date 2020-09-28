import React from "react";
// @ts-ignore
import {Editor as DraftEditor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import styles from './index.less';
import {BaseState} from "@/components/Editor/Type";
import FontsizeRender from "@/components/Editor/components/FontsizeRender/indcex";

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
    console.log(editorState);
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

  private _onChangeFontsize(fontsize: number): void
  {
    this.setState({
      fontsize: fontsize
    })
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render() {
    return (
      <div className={styles.editorWrapper}>
        <div className={styles.toolsWrapper}>
          <FontsizeRender fontsize={this.state.fontsize}  onChange={this._onChangeFontsize.bind(this)} />
        </div>
        <DraftEditor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Editor;
