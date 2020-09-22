import React from "react";
import {SizeState} from "@/pages/connect/components/Pc/Type";
import FullScreenWindows from "@/pages/connect/components/Pc/components/FullScreenWindows";

const Pc = () => {
  const windowsSize: SizeState= 'fullScreen'

  const mapSizeToComponent  = {
    fullScreen : <FullScreenWindows />,
    customer: '',
    standard: '',
    mini: ''
  };

  return (
    <>
      {mapSizeToComponent[windowsSize]}
    </>
  );
};

export default Pc;
