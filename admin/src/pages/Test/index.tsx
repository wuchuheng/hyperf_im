import React, {useState} from "react";
import {ClientState} from "@/models/ChatModel/Type";

interface TestState {
  a: string
}
const Test = () => {
  const [count, setCount] = useState(0);
  // const client: ClientState = {
  //   isPut: true,
  //   icon: 'MoveIcon',
  //   // bestNews: {
  //   //   content
  //   // }
  // };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Test;

