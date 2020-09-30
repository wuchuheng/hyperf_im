import React from "react";
import styles from './index.less';
import {Col, Row} from 'antd';
import {PropsState, BaseState} from './Type';
import ButtonRender from "./components/ButtonRender";


class OptionsRender extends React.Component<PropsState, any>{
  state: BaseState;
  constructor(props: PropsState) {
    super(props);
    this.state = {
      options: [
        12, 14, 16,
        18, 20, 24,
        28, 30, 32,
        36, 40, 48,
        56, 64, 72,
        96, 120, 144
      ]
    }
  }

  private _onMouseDown(e: any): void
  {
    e.preventDefault();
    // this.props.onChange(v)
  }

  render() {
    return (
      <div className={styles.optionsRenderWrapper}>
        <Row gutter={[8, 8]}>
          {this.state.options.map((v, i) => {
            return (
              <Col span={8} key={i}>
                <ButtonRender
                  content={v}
                  hasSelectFontsize={this.props.hasSelectFontsize}
                  onChange={this.props.onChange}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default OptionsRender;
