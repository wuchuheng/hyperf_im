import React, {useState} from "react";
import {TracksState} from '../../Type';
import { Row, Col, Popover } from 'antd';
import {TrackIcon} from "@/components/Icons";
import styles from './index.less';

const TracksRender = function(props: {tracks: TracksState}) {
  const currentItemRender = (
    <Col span={24}>
      <div className={styles.itemWrapper}>
        <Row>
          <Col span={8}>当前访问</Col>
          <Col span={14} offset={2}>
            <a
              href={props.tracks.current}
              target='_blank'>{props.tracks.current}</a>
          </Col>
        </Row>
      </div>
    </Col>
  );
  const passedItemsRender = props.tracks.passed.map((v, i) => {
    return (
      <Col span={24} key={i}>
        <div className={styles.itemWrapper}>
          <Row>
            <Col span={8}>{v.time}</Col>
            <Col span={14} offset={2}>
              <a href={v.url} target='_blank'>{v.url}</a>
            </Col>
          </Row>
        </div>
      </Col>
    );
  });
  const content = (
    <div className={styles.hoverRender}>
      <Row>
        {currentItemRender}
        {passedItemsRender}
      </Row>
    </div>
  );

  const [iconRernderStyle, setIconRernderStyle] = useState({transform: 'rotate(90deg)', transition: 'all .3s linear'})
  const onChange = (visitState: boolean): void => {
    visitState ? setIconRernderStyle({ transform: 'rotate(0deg)', transition: 'all .4s linear'}) :
      setIconRernderStyle({transform: 'rotate(90deg)', transition: 'all .4s linear'});
  }

  return (
      <Row>
        <Col span={13}>
          <div className={styles.mainWrapper}>
            <Popover
              placement="bottomRight"
              content={content}
              trigger="hover"
              onVisibleChange={onChange}
            >
            <Row>
              <Col span={2}><TrackIcon style={iconRernderStyle}/></Col>
              <Col span={28} offset={4}>轨迹</Col>
            </Row>
            </Popover>
          </div>
        </Col>
      </Row>
  );
};

export default TracksRender;
