import React from 'react';
import {createRef} from 'react';

class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toEdit: false,
            editText: props.messageText,
        }
        console.log(props);
    }

    static getDerivedStateFromProps(props) {
        return props;
    }

    editArea = createRef();
    messageLi = createRef();

    render() {
        const {id, nickName, checked, messageText, toEdit, editText} = this.state;
        const {changeMessageText, changeCheck, remove} = this.state;
        return <li className={toEdit ? "editing" : ""} ref={this.messageLi}>
            <h3>{nickName}</h3>
            <input type="checkbox"
                   checked={checked}

                   onChange={({target}) => {
                       console.log("打印checked")
                       console.log(target.checked);
                       changeCheck(id, target.checked)
                   }}
            />
            <div
                onDoubleClick={() => {
                    this.setState({toEdit: true})
                    console.log(this.state.toEdit);
                }}
            >
                <p style={{"display": (toEdit ? "none" : "block")}}>{messageText}</p>
                <textarea style={{"display": (toEdit ? "block" : "none")}}
                          value={editText}
                    // 改变时，将输入文字保存到某个状态变量中
                          onChange={({target}) => {
                              this.setState({
                                  editText: target.value
                              })
                          }}

                          onBlur={() => {
                              if (editText.trim()) {
                                  changeMessageText(id, editText);
                              } else {
                                  this.setState({
                                      editText: messageText
                                  })
                              }
                              this.setState({toEdit: false})
                          }}
                          ref={this.editArea}
                >

                </textarea>
            </div>
            <a onClick={() => {
                remove(id)
            }}>删除</a>
        </li>
    }
}

export default Message;