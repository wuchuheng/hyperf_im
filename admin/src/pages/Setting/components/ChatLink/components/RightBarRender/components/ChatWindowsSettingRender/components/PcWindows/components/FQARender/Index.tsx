import React, {useState} from "react";
import {PropsState} from './Type';
import styles from './index.less';
import {Switch, Button, Col, Modal, Form, Input} from 'antd';
import { ReactSortable } from "react-sortablejs";
import {FQAItemState} from './Type';
import {MoveIcon} from "@/components/Icons";
import EditFormRender from './components/EditFormRender';

const FQARender = (props: PropsState) => {
  const [form] = Form.useForm();
  const initSwitch: boolean = true;
  const [switchState, setSwitch] = useState(initSwitch);
  const initIsEditRenderVisitable: boolean = true;
  const [isEditRenderVisitable, setIsEditRenderVisitable] = useState(initIsEditRenderVisitable);
  const onEditCancel = () => setIsEditRenderVisitable(false);
  const initFQAList: Array<FQAItemState> = [
    {title: 'hello1', id: 1, order_no: 1, content: '1'},
    {title: 'hello2', id: 2, order_no: 2, content: '2'},
    {title: 'hello3', id: 3, order_no: 3, content: '3'}
  ];
  const [fqaList, setFqaList] = useState(initFQAList);

  const onSwicheChange = (v: boolean) => {
    setSwitch(v);
  };

  const onFqaListChange = (v: Array<FQAItemState>) => {
    const items = v.map((inV, i) => {
      inV.order_no = i;
      return inV;
    })
    setFqaList(items);
  };
  // 显示编辑页面
  const showEditRender = (v: FQAItemState) => {
    setIsEditRenderVisitable(true);
  };

  const handleOk = (e: any) => {
    setIsEditRenderVisitable(false);
      console.log(e);
  };

  const itemsRender = fqaList.map((v: FQAItemState, i:number) => {
    return (
      <div className={styles.itemWrapper} key={i}>
        <div>
          <MoveIcon />
          {v.title}
        </div>
        <div>
          <span className={styles.actionRender} onClick={() => showEditRender(v)}>编辑</span>|
          <span className={styles.actionRender}>删除</span>
        </div>
      </div>
    );
  });
  const editControls = ['bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator', 'media' ]

  return (
    <div className={`${props.className} ${styles.FQAWrapper}`}>
       <div className={styles.headerWrapper}>
         <div>常见问题</div>
         <div>功能启用:<Switch checked={switchState} onChange={onSwicheChange} className={styles.switchRender}/></div>
       </div>
       <div className={styles.listRender}>
         <div className={styles.listWrapper}>
           <ReactSortable
             list={fqaList}
             animation={150}
             setList={(newState:FQAItemState[]) => onFqaListChange(newState)}
             className={styles.reactSortableWrapper}
           >
             {itemsRender}
           </ReactSortable>
         </div>
         <Button className={styles.buttonRender} >添加问题</Button>
       </div>
      <Modal
        title="常见问题"
        visible={isEditRenderVisitable}
        onCancel={onEditCancel}
        onOk={handleOk}
      >
        <EditFormRender />
      </Modal>
     </div>
   );
};

export default FQARender;
