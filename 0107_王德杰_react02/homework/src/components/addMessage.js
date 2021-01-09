import React from 'react';

/**
 * 受控组件
 */

class AddMessage extends React.Component {

    state = {
        nickName: "",
        messageText: ""
    }


    render() {
        const {add} = this.props;
        const {nickName, messageText} = this.state;
        return <div className="addMessage">
            <input
                id={"new-nickName"}
                type="text"
                value={nickName}
                onChange={({target}) => {
                    this.setState({
                        nickName: target.value
                    })
                }}
                placeholder={"请输入昵称"}>
            </input>

            <textarea
                id={"new-messageText"}
                value={messageText}
                onChange={({target}) => {
                    this.setState({
                        messageText: target.value
                    })
                }}
                placeholder={"请输入留言"}>
            </textarea>

            <button onClick={() => {
                if (nickName.trim() && messageText.trim()) {
                    add(nickName, messageText);
                    this.setState({
                        nickName: "",
                        messageText: ""
                    })
                }
            }}>提交留言
            </button>
        </div>
    }
}

export default AddMessage;