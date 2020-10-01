import React from "react";
import {BaseState, PropsState} from './Type';
import styles from './index.less';
import {Tooltip, Popover} from 'antd';
import {toolHeaderConfig} from '../../Config';
import OptionsRender from './components/OptionsRender'

class ColorRender extends React.Component<PropsState, any>
{
  mainDiv: React.RefObject<HTMLDivElement>;

  state: BaseState;

  colors: string[];

  constructor(props: PropsState) {
    super(props);
    const colors = Object.keys(props.stylesMap)
      .filter(v =>  v.substr(0, 10) === 'FONT_COLOR')
      .map(v => v.substr(11));
    this.colors = colors;
    this.mainDiv = React.createRef();
    this.state = {
      isVisitTitle: false,
      isVisitOption: false
    }
  }

  private _onMouseEnder (): void
  {
    const div = this.mainDiv.current as HTMLDivElement;
    if (div.style.backgroundColor ==  'rgb(255, 255, 255)') {
      div.style.backgroundColor = toolHeaderConfig.focusBackgoundColor;
    }
  };

  private _onMouseLeave(): void
  {
    const div = this.mainDiv.current as HTMLDivElement;
    if (div.style.backgroundColor ==   'rgb(242, 242, 242)' && !this.state.isVisitOption) {
      div.style.backgroundColor = 'rgb(255, 255, 255)';
    }
 }

 // 选定颜色
  private _onChangeColor(color: string): void
  {
      this.setState({
        isVisitTitle: false,
        isVisitOption: false
      });
      this.props.onChangeColor(color);
  }

  // 选定背景色
  private _onChangeBackColor(color: string): void
  {
    this.setState({
      isVisitTitle: false,
      isVisitOption: false
    });
    this.props.onChangeBackColor(color);
  }

  private _onVisitTitle(isVisit: boolean): void
 {
    this.setState({ isVisitTitle: isVisit });
 }

 private _onVisitOption(isVisit: boolean): void
 {
   if (!isVisit) {
     const div = this.mainDiv.current as HTMLDivElement;
     div.style.backgroundColor = 'rgb(255, 255, 255)';
     this.setState({
       isVisitTitle: false,
       isVisitOption: false
     });
   }
 }

 // 点击
 private _onMouseDown(e: any)
 {
   e.preventDefault();
   this.setState({
     isVisitTitle: false,
     isVisitOption: true
   });
 }

  render() {
    return (
      <Popover
        content={
          <OptionsRender
            colors={this.colors}
            backColor={this.props.backColor}
            color={this.props.color}
            onChangeColor={(color) => this._onChangeColor(color) }
            onChangeBackColor={this._onChangeBackColor.bind(this)}
          />
        }
        placement={'bottomRight'}
        trigger='hover'
        visible={this.state.isVisitOption}
        onVisibleChange={this._onVisitOption.bind(this)}
      >
        <Popover
          content={'颜色'}
          placement="bottom"
          visible={this.state.isVisitTitle}
          onVisibleChange={this._onVisitTitle.bind(this)}
        >
          <div
            className={styles.colorRenderWrapper}
            ref={this.mainDiv}
            onMouseEnter={() => this._onMouseEnder()}
            onMouseLeave={() => this._onMouseLeave()}
            style={{backgroundColor: this.props.backColor}}
            onMouseDown={this._onMouseDown.bind(this)}
          >
            <div
              className={styles.centerWrapper}
              style={{color: this.props.color}}
            >
              <div className={styles.textRender}>A</div>
              <div className={styles.underlineRender} style={{backgroundColor: this.props.color}} ></div>
            </div>
          </div>
        </Popover>
      </Popover>
    );
  }
}

export default ColorRender;
