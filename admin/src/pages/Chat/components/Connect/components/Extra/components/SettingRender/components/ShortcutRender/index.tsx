import React from "react";
import {Row, Col, Button} from 'antd';


const ShortcutRender = (props: any) => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={22} offset={2}>
        <Row>
          <Col span={8}>退出输入模式</Col>
          <Col span={12}><Button>F1</Button></Col>
        </Row>
      </Col>

      <Col span={22} offset={2}>
        <Row>
          <Col span={8}>激活输入框</Col>
          <Col span={12}><Button>R</Button></Col>
        </Row>
      </Col>

      <Col span={22} offset={2}>
        <Row>
          <Col span={8}>激活「内部消息」模式</Col>
          <Col span={12}><Button>shift + R</Button></Col>
        </Row>
      </Col>

      <Col span={22} offset={2}>
        <Row>
          <Col span={8}>给顾客添加标签</Col>
          <Col span={12}><Button>T</Button></Col>
        </Row>
      </Col>

      <Col span={22} offset={2}>
        <Row>
          <Col span={8}>给顾客添加备注</Col>
          <Col span={12}><Button>N</Button></Col>
        </Row>
      </Col>

      <Col span={22} offset={2}>
        <Row>
          <Col span={8}>结束当前对话</Col>
          <Col span={12}><Button>ctrl + F2</Button></Col>
        </Row>
      </Col>

      <Col span={22} offset={2}>
        <Row>
          <Col span={8}>对话框中换行</Col>
          <Col span={12}><Button>shift + enter</Button></Col>
        </Row>
      </Col>

      <Col span={22} offset={2}>
        <Row>
          <Col span={8}>上一条对话</Col>
          <Col span={12}><Button>ctrl + ↑</Button></Col>
        </Row>
      </Col>

      <Col span={22} offset={2}>
        <Row>
          <Col span={8}>下一条对话</Col>
          <Col span={12}><Button>ctrl + ↓</Button></Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ShortcutRender;
