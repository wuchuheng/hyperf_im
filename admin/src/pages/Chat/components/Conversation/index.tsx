import React from "react";
import EmptyConversation from "./components/EmptyConversation";

class Conversation extends React.Component<any, any>
{
  render() {
    return (
      <div>
        <EmptyConversation />
      </div>
    );
  }
}

export default Conversation;
