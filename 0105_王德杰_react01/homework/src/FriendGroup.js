import {Component, Fragment} from 'react';
import React from 'react';

class FriendGroup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            groupName: props.groupName,
            groupList: props.groupList,
            expanded: true
        }
        this.state.groupList = props.groupList.map((friend, index) => {
            return React.createElement("dd", {key: index}, friend);
        })
        this.handleExpanded = this.handleExpanded.bind(this);
    }

    handleExpanded() {
        this.setState({
            expanded: !this.state.expanded
        })

    }

    render() {
        return <Fragment>
            <dl className={this.state.expanded ? "expanded friend-group" : "friend-group"}>
                <dt onClick={this.handleExpanded}>{this.state.groupName}</dt>
                {this.state.groupList}
            </dl>
        </Fragment>
    }
}

export default FriendGroup;