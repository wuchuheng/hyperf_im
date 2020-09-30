import React, {useState} from 'react'
// @ts-ignore
import {Editor, EditorState, RichUtils} from 'draft-js';
// @ts-ignore
import { ContentUtils } from 'braft-utils'
import styles from './index.less';
import 'braft-editor/dist/index.css'
import BraftEditor, {ControlType, ExtendControlType} from 'braft-editor'
import {Upload} from 'antd';
import {PictureIcon} from "@/components/Icons";

class EditFormRender extends React.Component<any, any>
{
  state = {
    editorState: BraftEditor.createEditorState(null)
  }

  constructor(props: any) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = this.onChange.bind(this);
  }

  private onChange(editorState: any)
  {
    this.setState({editorState})
  };


  uploadHandler = (param: any) => {

    if (!param.file) {
      return false
    }
    // this.setState({
    //   editorState: ContentUtils.insertMedias(this.state.editorState, [{
    //     type: 'IMAGE',
    //     url: 'https://margox.cn/wp-content/uploads/2017/05/IMG_4995-480x267.jpg'
    //   }])
    // })
    // 使用braftFinder.addItems来添加媒体到媒体库

    // const editorState = ContentUtils.insertMedias(this.state.editorState, [
    //   {
    //     type: 'IMAGE',
    //     url: 'https://margox.cn/wp-content/uploads/2017/05/IMG_4995-480x267.jpg'
    //   }
    // ])
    // // 更新插入媒体后的editorState
    // this.onChange(editorState)
    // this.setState({ editorState })
  }

  render() {
    const controls = [
      'font-size',
      'text-color',
      'bold',
      'italic',
      'underline',
      'clear',
      'text-indent',
      'text-align',
      'list-ol',
      'list-ul',
      'link',
    ] as ControlType[];

    const extendControls = [
      {
        key: 'antd-uploader',
        type: 'component',
        component: (
          <Upload
            accept="image/*"
            showUploadList={false}
            customRequest={this.uploadHandler}
          >
            {/* 这里的按钮最好加上type="button"，以避免在表单容器中触发表单提交，用Antd的Button组件则无需如此 */}
            <button type="button" className="control-item button upload-button" data-title="插入图片">
              <PictureIcon className={styles.iconRender}/>
            </button>
          </Upload>
        )
      }
    ] as ExtendControlType[];

    return (
      <div className={styles.editFormWrapper}>
        <BraftEditor
          controls={controls}
          contentStyle={{height: 210, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)'}}
          extendControls={extendControls}
          value={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default EditFormRender;


