import React, { Component } from "react";

class Avatar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {avatarUrl, name} = this.props.user;
        
        return (
            <img 
                className="Avatar"     
                src={avatarUrl}
                alt={name}
            />
        )
    }
}

export default Avatar;