import './App.css';
import {Component} from "react";
import AddMessage from "./components/addMessage";
import MessageList from "./components/messageList";


class App extends Component {

    state = {
        messages: [
            {
                "id": 1,
                "nickName": "昵称1",
                "messageText": "留言内容留言内容留言内容留言内容留言内容留言内容留言内容",
                "checked": false
            },
            {
                "id": 2,
                "nickName": "昵称2",
                "messageText": "留言内容留言内容留言内容留言内容留言内容留言内容留言内容",
                "checked": false
            },
            {
                "id": 3,
                "nickName": "昵称3",
                "messageText": "留言内容留言内容留言内容留言内容留言内容留言内容留言内容",
                "checked": false
            }
        ],

        selectedCnt: 0

    }

    add = (nickName, messageText) => {
        const {messages} = this.state;
        messages.push({
            id: Date.now(),
            nickName,
            messageText
        });
        this.setState({
            messages
        })
    }

    remove = (id) => {
        const {messages} = this.state;
        this.setState({
            messages: messages.filter(msg => msg.id !== id)
        })
    }

    changeMessageText = (id, msgText) => {
        const {messages} = this.state;
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].id === id) {
                messages[i] = {
                    ...messages[i],
                    messageText: msgText
                }
                break;
            }
        }
        this.setState({
            messages
        })
    }

    changeCheck = (id, checked) => {
        const {messages} = this.state;
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].id === id) {
                messages[i] = {
                    ...messages[i],
                    checked
                }
                break;
            }
        }
        this.setState({
            messages
        })
    }

    render() {
        const {messages} = this.state;
        const selectedCnt = messages.filter(msg => msg.checked).length;
        const totalCnt = messages.length;
        return (
            <section className="wrap">
                <h2 className="title">留言板</h2>

                <AddMessage
                    add={this.add}
                />

                <MessageList
                    messageData={messages}
                    remove={this.remove}
                    changeMessageText={this.changeMessageText}
                    changeCheck={this.changeCheck}
                />


                <div className="sum">
                    <label>
                        <input type="checkbox"
                               onChange={({target}) => {
                                   console.log(target.checked);

                                   for (let i = 0; i < messages.length; i++) {
                                       messages[i] = {
                                           ...messages[i],
                                           checked: target.checked
                                       }
                                   }
                                   console.log(messages);
                                   this.setState({
                                       messages
                                   })
                                   // this.setState({
                                   //     messages: messages.map(msg => {
                                   //         return {
                                   //             ...msg,
                                   //             checked: target.checked
                                   //         }
                                   //     })
                                   // })
                               }}
                        />
                        <span>选中全部</span>
                    </label>
                    <a onClick={({target}) => {
                        const remainMsg = messages.filter(msg => !msg.checked);
                        this.setState({
                            messages: remainMsg
                        })

                    }}>删除选中项</a>
                    <p>{"当前选中" + selectedCnt + "项，共" + totalCnt + "条留言"}</p>
                </div>
            </section>
        );
    }
}

export default App;
