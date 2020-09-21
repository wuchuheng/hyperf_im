import React from "react";
import {Row, Col} from 'antd';
import styles from './index.less';
import {history} from 'umi';
import NotFoundRender from "@/pages/Setting/components/NotFoundRender";
import NavigationRender from './components/NavigationRender';

const Setting =(props: any) => {
  const countPatchChildren = props.route.routes.findIndex((v: any) => {
    return v.path == history.location.pathname;
  });

  const children =  countPatchChildren > - 1 ? props.children : (<NotFoundRender />);

  return (
    <Row>
      <Col span={4}>
        <div className={styles.div1} >
          <NavigationRender />
        </div>
      </Col >
      <Col span={20}>
        {children}
      </Col>
    </Row>
  );
};

export default Setting;
