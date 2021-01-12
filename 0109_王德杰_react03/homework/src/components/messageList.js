import React from 'react';
import Message from "./message";

class MessageList extends React.Component {


    render() {
        const {messageData} = this.props;
        return <ul className={"messageList"}>
            {messageData.map(messageRecord => {
                return <Message
                    key={messageRecord.id}
                    nickName={messageRecord.nickName}
                    messageText={messageRecord.messageText}
                    id={messageRecord.id}
                    checked={messageRecord.checked}
                    {...this.props}
                />
            })}
        </ul>
    }
}


export default MessageList;