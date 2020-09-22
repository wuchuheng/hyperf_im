import React from "react";
import Pc from "@/pages/connect/components/Pc";

// :xxx 有里判断是什么设备 手机？电脑 ？什么窗口?，然后调用组件
const ChatLink = (props: any) => {
  const dirver: 'pc' | 'phone' = 'pc';
  const mapDriverToComponent = {
    pc: <Pc />,
    phone: '',
  };
  return (
    <>
      {mapDriverToComponent[dirver]}
    </>
  );
};

export default ChatLink;
