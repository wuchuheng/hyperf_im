import React from "react";
import {PropsState} from './Type';
import styles from './index.less';
import {toolHeaderConfig} from '../../Config';
import {Popover} from 'antd';
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
      titleVisitAble: false,
      fontSize: undefined
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

  // 点击显示选项
  private _onMouseDown(e: any): void
  {
    e.preventDefault();
    this.setState({
      titleVisitAble: false,
      contentVisitAble: true
    });
  }

  private _onVisitAbleContent(isShow: boolean): void
  {
    if (!isShow) {
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
    const fontSize =
      (
        (): number | undefined => {
          if (this.props.inlineStyles.length) {
            let fontSize = undefined;
            this.props.inlineStyles.every((v) => {
              const prefix = 'FONT_SIZE_';
              if (v.includes(prefix, 0)) {
                fontSize = v.substr(prefix.length);
                return false;
              } else {
                return true;
              }
            });
            return fontSize;
          } else  {
            return undefined;
          }
        }
      )();
    return (
      <Popover
        content={'字号'}
        placement={'bottomLeft'}
        onVisibleChange={this._onVisitAbleTitle.bind(this)}
        visible={this.state.titleVisitAble}
      >
          <Popover
            placement="bottomLeft"
            content={<OptionsRender hasSelectFontsize={fontSize} onChange={v => this._onChange(v)}/>}
            trigger="hover"
            visible={this.state.contentVisitAble}
            onVisibleChange={this._onVisitAbleContent.bind(this)}
          >
          <div
            onMouseDown={this._onMouseDown.bind(this)}
            className={styles.fontsizeRenderWrapper}
            ref={this.fontsizeButton}
            onMouseEnter = {(e) => this._onMouseEnter()}
            onMouseLeave = {(e) => this._onMouseLeave() }
          >
            { fontSize !== undefined ? fontSize : '字号'}
            <CaretDownOutlined className={styles.iconRender} />
          </div>
        </Popover>
      </Popover>
    );
  }
}

export default FontsizeRender;
