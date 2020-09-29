import React from "react";
import {PropsState} from './Type';
import styles from './index.less';
import {toolHeaderConfig} from '../../Config';
import {Tooltip, Popover} from 'antd';
import {CaretDownOutlined} from '@ant-design/icons';
import OptionsRender from './components/OptionsRender';
import {BaseState} from "./Type";

class FontsizeRender extends React.Component<PropsState, any>
{
  fontsizeButton: React.RefObject<HTMLDivElement>;

  state: BaseState;

  constructor(props: PropsState) {
    super(props);
    this.fontsizeButton = React.createRef();
    this.state = {
      contentVisitAble: false,
      titleVisitAble: false
    };
  }

  private _onMouseEnter(): void
  {
    const div = this.fontsizeButton.current as HTMLDivElement;
    div.style.backgroundColor = toolHeaderConfig.focusBackgoundColor;
  }

  private _onMouseLeave(): void
  {
    const div = this.fontsizeButton.current as HTMLDivElement;
    if (!this.state.contentVisitAble) div.style.backgroundColor = 'white';
  }

  // 是否显示标题
  private _onVisitAbleTitle(e: boolean): void
  {
    this.setState({
      titleVisitAble: e
    })
  }

  private _onVisitAbleContent(isShow: boolean): void
  {
    if (isShow) {
      this.setState({
        titleVisitAble: false,
        contentVisitAble: true
      });

    } else {
      this.setState({
        titleVisitAble: false,
        contentVisitAble: false
      });
      const div = this.fontsizeButton.current as HTMLDivElement;
      div.style.backgroundColor = 'white';
    }
  }

  private _onChange(v: number): void
  {
    this.props.onChange(v);
    this.setState({ contentVisitAble: false });
    const div = this.fontsizeButton.current as HTMLDivElement;
    div.style.backgroundColor = 'white';
  }

  render() {
    return (
      <Popover
        content={'字号'}
        placement={'bottomLeft'}
        onVisibleChange={this._onVisitAbleTitle.bind(this)}
        visible={this.state.titleVisitAble}
      >
          <Popover
            placement="bottomLeft"
            content={<OptionsRender hasSelectFontsize={this.props.fontsize} onChange={v => this._onChange(v)}/>}
            trigger="click"
            visible={this.state.contentVisitAble}
            onVisibleChange={this._onVisitAbleContent.bind(this)}
          >
          <div
            className={styles.fontsizeRenderWrapper}
            ref={this.fontsizeButton}
            onMouseEnter = {(e) => this._onMouseEnter()}
            onMouseLeave = {(e) => this._onMouseLeave() }
          >
            {this.props.fontsize !== 12 ? this.props.fontsize : '字号'}
            <CaretDownOutlined className={styles.iconRender} />
          </div>
        </Popover>
      </Popover>
    );
  }
}

export default FontsizeRender;
