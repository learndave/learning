import React, { Component } from "react";

import UserInfo from './UserInfo';

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {text, author} = this.props;
        return (
            <div className="Comment">
                <UserInfo author={author}/>
                <div className="Comment-text">
                    {text}
                </div>
            </div>
        );
    }
}

export default Comment;