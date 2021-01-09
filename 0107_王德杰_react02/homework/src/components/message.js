import React from 'react';


class Message extends React.Component {



    render() {
        const {id, nickName, messageText} = this.props;
        const {remove} = this.props;
        return <li>
            <h3>{nickName}</h3>
            <p>{messageText}</p>
            <a onClick={() => {
                remove(id)
            }}>删除</a>
        </li>
    }
}

export default Message;