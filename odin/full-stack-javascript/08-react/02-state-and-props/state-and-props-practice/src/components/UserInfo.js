import React, { Component } from "react";

import Avatar from "./Avatar";

class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {author} = this.props;

        return (
            <div className="UserInfo">

                    <Avatar user={author}/>
                    
                    <div className="UserInfo-name">
                        Commenter's name: {author.name}
                    </div>
            </div>
        )
    }
}

export default UserInfo;