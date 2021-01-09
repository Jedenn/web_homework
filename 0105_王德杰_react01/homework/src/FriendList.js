import {Component} from 'react';
import React from 'react';
import FriendGroup from "./FriendGroup";

class FriendList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            friendList: props.friendList
        }
        this.state.friendGruops = props.friendList.map((group, index) => {
            return React.createElement(FriendGroup,
                {
                    groupName: group.groupName,
                    groupList: group.groupList,
                    key: index
                })
        })
    }

    render() {
        return <div className={"friendList"}>
            {this.state.friendGruops}
        </div>
    }


}

export default FriendList;