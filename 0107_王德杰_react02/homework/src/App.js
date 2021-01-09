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
                "messageText": "留言内容留言内容留言内容留言内容留言内容留言内容留言内容"
            },
            {
                "id": 2,
                "nickName": "昵称2",
                "messageText": "留言内容留言内容留言内容留言内容留言内容留言内容留言内容"
            },
            {
                "id": 3,
                "nickName": "昵称3",
                "messageText": "留言内容留言内容留言内容留言内容留言内容留言内容留言内容"
            }
        ]

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

    render() {
        const {messages} = this.state;
        return (
            <section className="wrap">
                <h2 className="title">留言板</h2>

                <AddMessage
                    add={this.add}
                />

                <MessageList
                    messageData={messages}
                    remove={this.remove}
                />
            </section>
        );
    }
}

export default App;
