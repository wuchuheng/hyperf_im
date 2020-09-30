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

 private _onVisitTitle(isVisit: boolean): void
 {
    this.setState({ isVisitTitle: isVisit });
 }

 private _onVisitOption(isVisit: boolean): void
 {
   const div = this.mainDiv.current as HTMLDivElement;

   if (!isVisit && div.style.backgroundColor === 'rgb(242, 242, 242)') {
     div.style.backgroundColor = 'rgb(255, 255, 255)';
   }
   this.setState({
     isVisitTitle: false,
     isVisitOption: isVisit
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
            onChangeColor={this.props.onChangeColor.bind(this)}
            onChangeBackColor={this.props.onChangeBackColor.bind(this)}
          />
        }
        placement={'bottomRight'}
        trigger='click'
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
